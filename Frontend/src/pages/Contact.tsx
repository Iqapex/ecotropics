// import React from "react";
// import { motion } from "framer-motion";
// import { FiMapPin, FiPhone, FiMail, FiFacebook, FiLinkedin, FiTwitter, FiSend } from "react-icons/fi";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Contact = () => {
//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-32 overflow-hidden"
//       >
//         <div className="absolute inset-0 bg-grid-green-100/50 [mask-image:linear-gradient(to_bottom,transparent,white)]" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
//           >
//             Let's Connect
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="text-xl text-gray-600 max-w-3xl mx-auto"
//           >
//             We're excited to hear from you! Whether you have questions about our projects or want to explore collaboration opportunities, our team is ready to assist.
//           </motion.p>
//         </div>
//       </motion.section>

//       {/* Contact Content */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="space-y-8"
//             >
//               <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
//                 <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                   Contact Information
//                 </h2>
                
//                 <div className="space-y-8">
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     className="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors"
//                   >
//                     <div className="p-3 bg-green-100 rounded-lg">
//                       <FiMapPin className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div className="ml-4">
//                       <h3 className="font-semibold mb-1 text-gray-800">Headquarters</h3>
//                       <p className="text-gray-600 leading-relaxed">
//                         Ecotropics | Applied Ecology for Tropical Resources Program Inc<br />
//                         1802 Vernon St NW #1077<br />
//                         Washington, D.C. 20009 USA
//                       </p>
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     className="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors"
//                   >
//                     <div className="p-3 bg-green-100 rounded-lg">
//                       <FiPhone className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div className="ml-4">
//                       <h3 className="font-semibold mb-1 text-gray-800">Phone</h3>
//                       <a href="tel:+12022412182" className="text-gray-600 hover:text-green-600 transition-colors">
//                         +1 (202) 241-2182
//                       </a>
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     className="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors"
//                   >
//                     <div className="p-3 bg-green-100 rounded-lg">
//                       <FiMail className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div className="ml-4">
//                       <h3 className="font-semibold mb-1 text-gray-800">Email</h3>
//                       <a href="mailto:info@ecotropics.org" className="text-gray-600 hover:text-green-600 transition-colors">
//                         info@ecotropics.org
//                       </a>
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* Social Media */}
//                 <div className="mt-8 pt-8 border-t border-gray-100">
//                   <h3 className="text-lg font-semibold mb-6 text-gray-800">Follow Us</h3>
//                   <div className="flex space-x-4">
//                     {[
//                       { icon: FiFacebook, link: "https://facebook.com/ecotropics" },
//                       { icon: FiLinkedin, link: "https://linkedin.com/company/ecotropics-inc" },
//                       { icon: FiTwitter, link: "https://x.com/Ecotropics_USA" }
//                     ].map((social, index) => (
//                       <motion.a
//                         key={index}
//                         whileHover={{ y: -4 }}
//                         href={social.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="p-3 bg-gray-100 rounded-lg hover:bg-green-100 text-gray-600 hover:text-green-600 transition-all"
//                       >
//                         <social.icon className="w-6 h-6" />
//                       </motion.a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
//             >
//               <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                 Send Us a Message
//               </h2>
//               <form className="space-y-6">
//                 {[
//                   { label: "Full Name", id: "name", type: "text" },
//                   { label: "Email Address", id: "email", type: "email" },
//                   { label: "Subject", id: "subject", type: "text" }
//                 ].map((field, index) => (
//                   <div key={index}>
//                     <label className="block text-gray-700 mb-2 font-medium" htmlFor={field.id}>
//                       {field.label}
//                     </label>
//                     <input
//                       type={field.type}
//                       id={field.id}
//                       className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
//                       required
//                     />
//                   </div>
//                 ))}

//                 <div>
//                   <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
//                     Your Message
//                   </label>
//                   <textarea
//                     id="message"
//                     rows={5}
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
//                     required
//                   />
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
//                 >
//                   <FiSend className="w-5 h-5" />
//                   <span>Send Message</span>
//                 </motion.button>
//               </form>
//             </motion.div>
//           </div>

//           {/* Office Hours */}
//           <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="bg-white p-8 rounded-2xl shadow-lg border mt-4 border-gray-100"
//               >
//                 <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                   Office Hours
//                 </h3>
//                 <ul className="space-y-4">
//                   {[
//                     { day: "Monday-Friday", time: "9:00 AM - 5:00 PM EST" },
//                     { day: "Saturday", time: "Closed" },
//                     { day: "Sunday", time: "Closed" }
//                   ].map((item, index) => (
//                     <li key={index} className="flex justify-between p-4 rounded-lg hover:bg-green-50 transition-colors">
//                       <span className="text-gray-700">{item.day}</span>
//                       <span className="text-gray-600 font-medium">{item.time}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>

//           {/* Map Section */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="mt-20 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border border-gray-100"
//           >
//             <div className="h-96 rounded-xl overflow-hidden relative">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.150962741356!2d-77.0368726846516!3d38.91351177957167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sThe%20White%20House!5e0!3m2!1sen!2sus!4v1629834486726!5m2!1sen!2sus"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 className="rounded-xl"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Send, Clock, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
          >
            Let's Connect
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We're excited to hear from you! Whether you have questions about our projects or want to explore collaboration opportunities, our team is ready to assist.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                
                <div className="space-y-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1 text-gray-800">Headquarters</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Ecotropics | Applied Ecology for Tropical Resources Program Inc<br />
                        1802 Vernon St NW #1077<br />
                        Washington, D.C. 20009 USA
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1 text-gray-800">Phone</h3>
                      <a href="tel:+12022412182" className="text-gray-600 hover:text-green-600 transition-colors">
                        +1 (202) 241-2182
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold mb-1 text-gray-800">Email</h3>
                      <a href="mailto:info@ecotropics.org" className="text-gray-600 hover:text-green-600 transition-colors">
                        info@ecotropics.org
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-semibold mb-6 text-gray-800">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { Icon: Facebook, link: "https://facebook.com/ecotropics", label: "Facebook" },
                      { Icon: Linkedin, link: "https://linkedin.com/company/ecotropics-inc", label: "LinkedIn" },
                      { Icon: Twitter, link: "https://x.com/Ecotropics_USA", label: "Twitter" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ y: -4 }}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white hover:shadow-lg transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.Icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Office Hours
                </h3>
                <ul className="space-y-4">
                  {[
                    { day: "Monday-Friday", time: "9:00 AM - 5:00 PM EST" },
                    { day: "Saturday", time: "Closed" },
                    { day: "Sunday", time: "Closed" }
                  ].map((item, index) => (
                    <li key={index} className="flex justify-between p-4 rounded-xl hover:bg-green-50 transition-colors duration-300">
                      <span className="text-gray-700 font-medium">{item.day}</span>
                      <span className="text-gray-600">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                {[
                  { label: "Full Name", id: "name", type: "text" },
                  { label: "Email Address", id: "email", type: "email" },
                  { label: "Subject", id: "subject", type: "text" }
                ].map((field, index) => (
                  <div key={index}>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor={field.id}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Our Location
                </h2>
                <a
                  href="https://goo.gl/maps/xxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                >
                  <span>View Larger Map</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="h-[500px] rounded-xl overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.150962741356!2d-77.0368726846516!3d38.91351177957167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sThe%20White%20House!5e0!3m2!1sen!2sus!4v1629834486726!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-xl"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;