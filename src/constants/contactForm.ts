const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby5FqMZiDxO3aKz7t5e9vM9Zx8Y2Px6mPqYvK4T5R7Jm3w/exec';

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
