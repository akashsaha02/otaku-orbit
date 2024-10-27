// Footer.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Otaku Orbit Blog</h3>
            <p>Your go-to source for all things anime. Discover reviews, news, and lifestyle tips!</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/about" className="hover:text-blue-400 transition duration-300">About Us</a></li>
              <li><a href="/blogs" className="hover:text-blue-400 transition duration-300">Blogs</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-blue-400 transition duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul>
              <li><a href="/anime" className="hover:text-blue-400 transition duration-300">Anime</a></li>
              <li><a href="/lifestyle" className="hover:text-blue-400 transition duration-300">Lifestyle</a></li>
              <li><a href="/travel" className="hover:text-blue-400 transition duration-300">Travel</a></li>
              <li><a href="/reviews" className="hover:text-blue-400 transition duration-300">Reviews</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-400 transition duration-300"><FaFacebook size={28} /></a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400 transition duration-300"><FaTwitter size={28} /></a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-blue-400 transition duration-300"><FaInstagram size={28} /></a>
              <a href="https://youtube.com" aria-label="YouTube" className="hover:text-blue-400 transition duration-300"><FaYoutube size={28} /></a>
            </div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span className="hover:text-blue-400 transition duration-300">info@otakuorbit.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Otaku Orbit Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
