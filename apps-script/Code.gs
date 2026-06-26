/**
 * STL Acro — contact form + newsletter backend (Google Apps Script web app).
 *
 * This script receives POSTs from the website (see src/constants/contactForm.ts).
 * There are two touch points, distinguished by the `type` field:
 *
 *   - type="contact"   → the Contact Us form. Posts the message to Discord.
 *                        If the visitor also checked the opt-in box
 *                        (subscribe=true), additionally adds them to Contacts.
 *   - type="newsletter"→ the landing-page signup. ONLY adds them to Contacts.
 *                        Does NOT post to Discord.
 *
 * "Adds to Contacts" = creates a Google Contact (deduped by email) and applies
 * the "newsletter" label in the acro.stlouis@gmail.com account. (A Contacts
 * "label" is a USER_CONTACT_GROUP in the People API, so this uses your existing
 * label rather than a separate group.)
 *
 * SETUP
 * -----
 * 1. Open the script editor at script.google.com while signed in as
 *    acro.stlouis@gmail.com (the contacts must land in that account).
 * 2. Set DISCORD_WEBHOOK_URL below to the same webhook the old script used.
 * 3. Services (left sidebar, "+") → add the "People API" advanced service.
 *    Its identifier must be `People`.
 * 4. Deploy → New deployment → type "Web app":
 *      - Execute as: Me (acro.stlouis@gmail.com)
 *      - Who has access: Anyone
 *    Copy the /exec URL into GOOGLE_SCRIPT_URL in src/constants/contactForm.ts
 *    (the URL there should already match if you redeploy the same project).
 * 5. The first run will prompt for authorization (contacts + external fetch).
 */

// Discord webhook for Contact Us messages. Paste the URL the old script used.
var DISCORD_WEBHOOK_URL = 'PASTE_EXISTING_DISCORD_WEBHOOK_URL_HERE';
// Must match your existing Google Contacts label exactly (case-sensitive).
// If no label with this name exists, the script creates it.
var NEWSLETTER_GROUP_NAME = 'newsletter';

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};
    var type = (p.type || 'contact').toString();
    var name = (p.name || '').toString().trim();
    var email = (p.email || '').toString().trim();
    var message = (p.message || '').toString().trim();
    var subscribe = (p.subscribe || '').toString().toLowerCase() === 'true';

    if (!email) {
      return json_({ ok: false, error: 'Missing email' });
    }

    // Only the Contact Us form posts to Discord. The newsletter signup never does.
    if (type === 'contact') {
      postToDiscord_(name, email, message);
    }

    // Add to Google Contacts when they opted in, or used the newsletter signup.
    if (subscribe || type === 'newsletter') {
      addNewsletterContact_(name, email);
    }

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

/** Posts a Contact Us submission to the Discord webhook. */
function postToDiscord_(name, email, message) {
  var content =
    '**New contact form message**\n' +
    '**Name:** ' + (name || '(none)') + '\n' +
    '**Email:** ' + email + '\n' +
    '**Message:** ' + (message || '(none)');

  UrlFetchApp.fetch(DISCORD_WEBHOOK_URL, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ content: content }),
    muteHttpExceptions: true,
  });
}

/**
 * Creates a Google Contact (if one with this email doesn't already exist) and
 * ensures it carries the "newsletter" label.
 */
function addNewsletterContact_(name, email) {
  var groupResourceName = getOrCreateNewsletterGroup_();

  // Look for an existing contact with this email so we don't create duplicates.
  var existing = findContactByEmail_(email);
  var resourceName;

  if (existing) {
    resourceName = existing.resourceName;
  } else {
    var created = People.People.createContact({
      names: name ? [{ givenName: name }] : [],
      emailAddresses: [{ value: email }],
    });
    resourceName = created.resourceName;
  }

  // Apply the "newsletter" label (idempotent — re-adding is a no-op).
  People.ContactGroups.Members.modify(
    { resourceNamesToAdd: [resourceName] },
    groupResourceName
  );
}

/** Returns the resourceName of the "newsletter" label, creating it if needed. */
function getOrCreateNewsletterGroup_() {
  var resp = People.ContactGroups.list({ pageSize: 200 });
  var groups = (resp && resp.contactGroups) || [];
  for (var i = 0; i < groups.length; i++) {
    if (groups[i].name === NEWSLETTER_GROUP_NAME) {
      return groups[i].resourceName;
    }
  }
  var created = People.ContactGroups.create({
    contactGroup: { name: NEWSLETTER_GROUP_NAME },
  });
  return created.resourceName;
}

/** Returns an existing contact matching the email, or null. */
function findContactByEmail_(email) {
  // searchContacts requires a warm-up call before it returns results reliably.
  People.People.searchContacts({ query: '', readMask: 'emailAddresses' });
  Utilities.sleep(300);

  var resp = People.People.searchContacts({
    query: email,
    readMask: 'emailAddresses',
    pageSize: 10,
  });
  var results = (resp && resp.results) || [];
  var target = email.toLowerCase();
  for (var i = 0; i < results.length; i++) {
    var person = results[i].person || {};
    var emails = person.emailAddresses || [];
    for (var j = 0; j < emails.length; j++) {
      if ((emails[j].value || '').toLowerCase() === target) {
        return person;
      }
    }
  }
  return null;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
