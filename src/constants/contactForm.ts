const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzzL3EXlj4hZwBIKmUsDkwdKo7b1wmqIqUBpsLeI8UN3YU3G-xFxgNbpNi8Qapd1zu-/exec';

export const sendToDiscord = async (data: { name: string; email: string; message: string }) => {
  const payload = {
    content: `**New Contact Form Submission from stlacro.com**\n\n**Name:** ${data.name}\n**Email:** ${data.email}\n**Message:** ${data.message}`,
  };

  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
};
