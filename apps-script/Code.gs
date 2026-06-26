/**
 * STL Acro — contact form + newsletter backend (Google Apps Script web app).
 *
 * Receives POSTs from the website (see src/constants/contactForm.ts). Two touch
 * points, distinguished by the `type` field:
 *
 *   - type="contact"    → Contact Us form. Posts the message to Discord.
 *                         If the visitor checked the opt-in box (subscribe=true),
 *                         also adds them to Google Contacts.
 *   - type="newsletter" → Landing-page signup. ONLY adds them to Google Contacts.
 *                         Does NOT post to Discord.
 *
 * "Adds to Google Contacts" = creates a contact (deduped by email) and applies
 * the "newsletter" label in the account this script runs as. (A Contacts "label"
 * is a USER_CONTACT_GROUP in the People API, so this reuses your existing label.)
 *
 * SETUP (in the new Google account)
 * ---------------------------------
 * 1. Open script.google.com signed in as the account that should own the
 *    contacts, and paste this file in.
 * 2. Services (left sidebar "+") → add "People API". Its identifier must be `People`.
 * 3. Deploy → Manage deployments → New deployment → Web app:
 *      Execute as: Me   |   Who has access: Anyone
 *    Put the /exec URL into GOOGLE_SCRIPT_URL in src/constants/contactForm.ts.
 * 4. First run prompts for authorization (external fetch + contacts).
 */

const DISCORD_WEBHOOK_URL =
  'https://discord.com/api/webhooks/1476284379075448995/h6V7MnYwkqstg4EaBwbhVk6NIlpnqsjgCTZ-dPe9gsuM8nZMe439Xgh92GC0DaCW5GEJ';

// Must match your Google Contacts label exactly (case-sensitive). Created if missing.
const NEWSLETTER_LABEL = 'newsletter';

function doPost(e) {
  const p = (e && e.parameter) || {};
  const type = p.type || 'contact';
  const name = p.name || '';
  const email = p.email || '';
  const message = p.message || '';
  const subscribe = String(p.subscribe).toLowerCase() === 'true';

  // Only the Contact Us form posts to Discord — never the newsletter signup.
  if (type === 'contact') {
    const content = `**New Contact Form Submission from stlacro.com**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`;
    UrlFetchApp.fetch(DISCORD_WEBHOOK_URL, {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({ content: content }),
      muteHttpExceptions: true,
    });
  }

  // Add to Google Contacts when they opted in, or used the newsletter signup.
  if (email && (subscribe || type === 'newsletter')) {
    addNewsletterContact_(name, email);
  }

  return ContentService.createTextOutput('OK');
}

/** Creates the contact if new, then applies the "newsletter" label. */
function addNewsletterContact_(name, email) {
  const labelResourceName = getOrCreateLabel_();

  const existing = findContactByEmail_(email);
  let resourceName;
  if (existing) {
    resourceName = existing.resourceName;
  } else {
    const created = People.People.createContact({
      names: name ? [{ givenName: name }] : [],
      emailAddresses: [{ value: email }],
    });
    resourceName = created.resourceName;
  }

  // Idempotent — re-adding an already-labeled contact is a no-op.
  People.ContactGroups.Members.modify(
    { resourceNamesToAdd: [resourceName] },
    labelResourceName
  );
}

/** Returns the resourceName of the "newsletter" label, creating it if needed. */
function getOrCreateLabel_() {
  const resp = People.ContactGroups.list({ pageSize: 200 });
  const groups = (resp && resp.contactGroups) || [];
  for (let i = 0; i < groups.length; i++) {
    if (groups[i].name === NEWSLETTER_LABEL) {
      return groups[i].resourceName;
    }
  }
  const created = People.ContactGroups.create({
    contactGroup: { name: NEWSLETTER_LABEL },
  });
  return created.resourceName;
}

/** Returns an existing contact matching the email, or null. */
function findContactByEmail_(email) {
  // searchContacts needs a warm-up call before it returns results reliably.
  People.People.searchContacts({ query: '', readMask: 'emailAddresses' });
  Utilities.sleep(300);

  const resp = People.People.searchContacts({
    query: email,
    readMask: 'emailAddresses',
    pageSize: 10,
  });
  const results = (resp && resp.results) || [];
  const target = email.toLowerCase();
  for (let i = 0; i < results.length; i++) {
    const person = results[i].person || {};
    const emails = person.emailAddresses || [];
    for (let j = 0; j < emails.length; j++) {
      if ((emails[j].value || '').toLowerCase() === target) {
        return person;
      }
    }
  }
  return null;
}
