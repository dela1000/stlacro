const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxANAfYJ81k4JZf4rmCw-V5Lc_zWii2ikHR0fwodLD174noN08nCUVk4uD6266ApRx6tw/exec';

export const MAX_NAME_LENGTH = 100;
export const MAX_EMAIL_LENGTH = 100;
export const MAX_MESSAGE_LENGTH = 2000;

type ContactSubmission = {
  name: string;
  email: string;
  message: string;
  subscribe?: boolean;
};

export const sendToDiscord = async (data: ContactSubmission) => {
  const formData = new FormData();
  formData.append('type', 'contact');
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('message', data.message);
  // When checked, the backend adds this name/email to the newsletter Google Contacts group.
  formData.append('subscribe', data.subscribe ? 'true' : 'false');

  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    body: formData,
    redirect: 'follow',
  });
};

// Sends just a name/email to be enrolled in the newsletter (added to Google Contacts).
export const subscribeToNewsletter = async (data: { name: string; email: string }) => {
  const formData = new FormData();
  formData.append('type', 'newsletter');
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('subscribe', 'true');

  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    body: formData,
    redirect: 'follow',
  });
};
