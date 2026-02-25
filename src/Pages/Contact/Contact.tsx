import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendToDiscord } from 'src/constants/contactForm';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await sendToDiscord(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Failed to send message:', err);
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="px-6 lg:px-24 pb-12 pt-12 lg:pb-12 flex-col gap-6 text-center lg:text-left">
      <div className="text-4xl">CONTACT</div>

      <div className="mt-8 flex flex-col gap-4 max-w-2xl mx-auto">
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          {submitted ? (
            <div>
              <div className="text-green-600 font-semibold py-4">Thank you! Your message has been sent.</div>
              <div className="flex flex-col gap-2 pt-4">
                <button onClick={() => setSubmitted(false)} className="text-gray-500 underline hover:text-gray-700 text-sm">
                  Send another message
                </button>
                <Link to="/" className="text-gray-500 underline hover:text-gray-700 text-sm">
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="text-gray-700 mb-6">Have a question or want to get in touch? Fill out the form below and we'll get back to you!</div>
              {error && <div className="text-red-600 py-2">{error}</div>}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 py-2 px-4 bg-blue-900 text-white rounded hover:bg-blue-800 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
