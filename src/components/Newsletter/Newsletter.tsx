import { useState } from 'react';
import { MAX_NAME_LENGTH, MAX_EMAIL_LENGTH, subscribeToNewsletter } from 'src/constants/contactForm';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Newsletter = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || formData.name.length > MAX_NAME_LENGTH) {
      setError('Please enter your name.');
      return;
    }

    if (formData.email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      await subscribeToNewsletter(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '' });
    } catch (err) {
      console.error('Failed to subscribe:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 lg:px-24 pb-12 pt-12 lg:pb-12">
      <div className="max-w-2xl mx-auto border border-gray-200 rounded-lg p-6 bg-gray-50 text-center">
        <div className="font-serif text-4xl mb-2">Join Our Newsletter</div>
        {submitted ? (
          <div className="text-green-600 font-semibold py-4">Thanks for subscribing! Keep an eye on your inbox.</div>
        ) : (
          <>
            <div className="text-gray-700 mb-6">Get updates on upcoming classes, jams, and workshops delivered straight to your inbox.</div>
            {error && <div className="text-red-600 py-2">{error}</div>}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={MAX_NAME_LENGTH}
                placeholder="Name"
                aria-label="Name"
                className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={MAX_EMAIL_LENGTH}
                placeholder="Email"
                aria-label="Email"
                className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-2 px-6 bg-blue-900 text-white rounded hover:bg-blue-800 disabled:opacity-50 whitespace-nowrap"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
