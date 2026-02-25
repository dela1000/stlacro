const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxx9Du4ly2BIcTO_Xu8SnxohTHgrT5Umz-iZnGX92tZxrvari9i7jXEr3nd1oGubmYy/exec';

export const MAX_NAME_LENGTH = 100;
export const MAX_EMAIL_LENGTH = 100;
export const MAX_MESSAGE_LENGTH = 2000;

export const sendToDiscord = async (data: { name: string; email: string; message: string }) => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('message', data.message);

  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    body: formData,
    redirect: 'follow',
  });
};
