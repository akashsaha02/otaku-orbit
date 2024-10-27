// Newsletter.jsx
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Subscribed successfully!');
      // Add email submission logic here (e.g., API call)
      setEmail('');
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-6 md:my-8 lg:my-16 bg-gradient-to-r from-indigo-200 to-purple-200 text-gray-800 p-8 text-center rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <p className="mb-6">Stay updated with the latest blogs, news, and anime insights!</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-auto p-3 rounded-md border border-gray-300 mb-4 sm:mb-0 sm:mr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
        >
          Subscribe
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </div>
  );
};

export default Newsletter;
