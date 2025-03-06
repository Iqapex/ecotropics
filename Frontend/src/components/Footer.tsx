// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Leaf, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="space-y-4">
//             <Link to="/" className="flex items-center text-white">
//               <Leaf className="h-8 w-8" />
//               <span className="ml-2 text-xl font-bold">EcoAction</span>
//             </Link>
//             <p className="text-gray-400">
//               Making a positive impact on our planet through sustainable environmental solutions.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Facebook className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Twitter className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Instagram className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <Linkedin className="h-6 w-6" />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/what-we-do" className="text-gray-400 hover:text-white">
//                   What We Do
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about-us" className="text-gray-400 hover:text-white">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/get-involved" className="text-gray-400 hover:text-white">
//                   Get Involved
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/membership" className="text-gray-400 hover:text-white">
//                   Membership
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>123 Eco Street</li>
//               <li>Green City, EC 12345</li>
//               <li>Phone: (555) 123-4567</li>
//               <li>Email: info@ecoaction.org</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
//             <p className="text-gray-400 mb-4">
//               Subscribe to our newsletter for updates on our environmental initiatives.
//             </p>
//             <form className="space-y-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition duration-150 ease-in-out"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} EcoAction. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiFacebook, FiLinkedin, FiTwitter, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white mt-24"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Ecotropics</h3>
            <ul className="space-y-2">
              <li><Link to="/about/our-history" className="text-gray-300 hover:text-green-400">Our Story</Link></li>
              <li><Link to="/about/our-people" className="text-gray-300 hover:text-green-400">Our Team</Link></li>
              <li><Link to="/what-we-do" className="text-gray-300 hover:text-green-400">Our Work</Link></li>
              <li><Link to="/get-involved/news" className="text-gray-300 hover:text-green-400">Newsroom</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/membership" className="text-gray-300 hover:text-green-400">Donate</Link></li>
              <li><Link to="/get-involved/volunteer" className="text-gray-300 hover:text-green-400">Volunteer</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-400">Contact</Link></li>
              <li><Link to="/get-involved/careers" className="text-gray-300 hover:text-green-400">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-green-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-green-400">Terms of Service</Link></li>
              <li><Link to="/financials" className="text-gray-300 hover:text-green-400">Financial Reports</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-green-400">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <FiMapPin className="w-5 h-5 mr-3 mt-1 text-green-400" />
                <address className="text-gray-300 not-italic">
                  Ecotropics | Applied Ecology for Tropical Resources Program Inc<br />
                  1802 Vernon St NW #1077<br />
                  Washington, D.C. 20009 USA
                </address>
              </div>
              <div className="flex items-center">
                <FiPhone className="w-5 h-5 mr-3 text-green-400" />
                <a href="tel:+12022412182" className="text-gray-300 hover:text-green-400">
                  +1 (202) 241-2182
                </a>
              </div>
              <div className="flex items-center">
                <FiMail className="w-5 h-5 mr-3 text-green-400" />
                <a href="mailto:info@ecotropics.org" className="text-gray-300 hover:text-green-400">
                  info@ecotropics.org
                </a>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="pt-4 mt-4 border-t border-gray-800">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com/ecotropics" className="text-gray-300 hover:text-green-400">
                  <FiFacebook className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/company/ecotropics-inc" className="text-gray-300 hover:text-green-400">
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a href="https://x.com/Ecotropics_USA" className="text-gray-300 hover:text-green-400">
                  <FiTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ecotropics. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              501(c)(3) Nonprofit · EIN 38-3751536
            </div>
            <div className="text-gray-400 text-sm">
              Registered in Washington D.C. since 2008
            </div>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-400">
            <p>We do not discriminate on the basis of race, color, national origin, sex, age, or disability.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <span>Certified by:</span>
              <span>GuideStar Platinum</span>
              <span>Charity Navigator ★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;