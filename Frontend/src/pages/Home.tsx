// import React from "react";
// import { motion } from "framer-motion";
// import { FiArrowRight, FiShare2, FiHeart, FiUsers } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Home = () => {
//   const focusAreas = [
//     {
//       title: "Nature-Based Solutions",
//       description: "Landscape connectivity, restoration, and ecosystem management",
//       image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       link: "/what-we-do/nbs",
//       icon: "🌍",
//       subItems: [
//         "Restoration of native forests",
//         "Constructed wetlands",
//         "Improved Forest Management",
//         "Ecosystem infrastructure",
//       ],
//     },
//     {
//       title: "REDD+",
//       description: "Reducing Emissions from Deforestation and Degradation",
//       image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80",
//       link: "/what-we-do/redd",
//       icon: "🛡️",
//       subItems: [
//         "36,807 hectares protected",
//         "Andean ecosystem conservation",
//         "Carbon credit verification",
//         "Community empowerment",
//       ],
//     },
//     {
//       title: "ARR",
//       description: "Afforestation, Restoration, and Reforestation",
//       image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       link: "/what-we-do/arr",
//       icon: "🌱",
//       subItems: [
//         "Native tree planting",
//         "Landscape connectivity",
//         "Carbon sequestration",
//         "Job creation",
//       ],
//     },
//   ];

//   const impactStats = [
//     { number: "1M+", label: "Trees Planted", icon: FiHeart },
//     { number: "500K", label: "Lives Impacted", icon: FiUsers },
//     { number: "100+", label: "Projects Completed", icon: FiShare2 },
//     { number: "50+", label: "Countries Reached", icon: FiArrowRight },
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             'url("https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
//           >
//             Creating a Sustainable Future Together
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-xl text-white mb-8 max-w-3xl mx-auto"
//           >
//             Join us in our mission to protect and preserve our planet for future generations.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="flex flex-wrap gap-4 justify-center"
//           >
//             <Link
//               to="/membership/donate"
//               className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition duration-150 ease-in-out flex items-center"
//             >
//               Donate Now
//             </Link>
//             <Link
//               to="/get-involved"
//               className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium transition duration-150 ease-in-out flex items-center"
//             >
//               Get Involved
//             </Link>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Focus Areas Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Impact Areas</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {focusAreas.map((area, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
//               >
//                 <img
//                   src={area.image}
//                   alt={area.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                     {area.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{area.description}</p>
//                   <Link
//                     to={area.link}
//                     className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
//                   >
//                     Learn More <FiArrowRight className="ml-2" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Impact Stats Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//             {impactStats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
//               >
//                 <div className="text-4xl font-bold text-green-600 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-green-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-white mb-4"
//           >
//             Ready to Make a Difference?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-white text-xl mb-8"
//           >
//             Join our community of environmental champions and help create lasting change.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             <Link
//               to="/membership"
//               className="inline-block bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg font-medium transition duration-150 ease-in-out"
//             >
//               Become a Member
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;




// import React from "react";
// import { motion } from "framer-motion";
// import { FiArrowRight, FiShare2, FiHeart, FiUsers } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Home = () => {
//   const focusAreas = [
//     {
//       title: "Nature-Based Solutions",
//       description:
//         "Landscape connectivity, restoration, and ecosystem management to combat climate change and preserve biodiversity.",
//       image:
//         "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       link: "/what-we-do/nbs",
//       icon: "🌍",
//     },
//     {
//       title: "REDD+",
//       description:
//         "Reducing Emissions from Deforestation and Degradation through conservation, carbon credit verification, and community empowerment.",
//       image:
//         "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80",
//       link: "/what-we-do/redd",
//       icon: "🛡️",
//     },
//     {
//       title: "Afforestation, Restoration, and Reforestation",
//       description:
//         "Planting native trees, creating landscape connectivity, and sequestering carbon while generating jobs for local communities.",
//       image:
//         "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       link: "/what-we-do/arr",
//       icon: "🌱",
//     },
//   ];

//   const impactStats = [
//     { number: "1M+", label: "Trees Planted", icon: FiHeart },
//     { number: "500K", label: "Lives Impacted", icon: FiUsers },
//     { number: "100+", label: "Projects Completed", icon: FiShare2 },
//     { number: "50+", label: "Countries Reached", icon: FiArrowRight },
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             'url("https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
//           >
//             Creating a Sustainable Future Together
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-xl text-white mb-8 max-w-3xl mx-auto"
//           >
//             Join us in our mission to protect and preserve our planet for future generations.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="flex flex-wrap gap-4 justify-center"
//           >
//             <Link
//               to="/membership/donate"
//               className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition duration-150 ease-in-out flex items-center"
//             >
//               Donate Now
//             </Link>
//             <Link
//               to="/get-involved"
//               className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium transition duration-150 ease-in-out flex items-center"
//             >
//               Get Involved
//             </Link>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Focus Areas Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Impact Areas</h2>
//           {focusAreas.map((area, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
//                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//               }`}
//             >
//               {/* Content */}
//               <div className="flex-1">
//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                   {area.title}
//                 </h3>
//                 <p className="text-lg text-gray-600 mb-6">{area.description}</p>
//                 <Link
//                   to={area.link}
//                   className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
//                 >
//                   Learn More <FiArrowRight className="ml-2" />
//                 </Link>
//               </div>

//               {/* Image */}
//               <div className="flex-1">
//                 <motion.img
//                   src={area.image}
//                   alt={area.title}
//                   className="w-full h-96 object-cover rounded-xl shadow-lg"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Impact Stats Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//             {impactStats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
//               >
//                 <div className="text-4xl font-bold text-green-600 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-green-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-white mb-4"
//           >
//             Ready to Make a Difference?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-white text-xl mb-8"
//           >
//             Join our community of environmental champions and help create lasting change.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             <Link
//               to="/membership"
//               className="inline-block bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg font-medium transition duration-150 ease-in-out"
//             >
//               Become a Member
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;










// import React from "react";
// import { motion } from "framer-motion";
// import { FiArrowRight, FiShare2, FiHeart, FiUsers } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Home = () => {
//   const focusAreas = [
//     {
//       title: "Nature-Based Solutions",
//       description: "Landscape connectivity, restoration, and ecosystem management",
//       link: "/what-we-do/nbs",
//       icon: "🌍",
//       subItems: [
//         "Restoration of native forests",
//         "Constructed wetlands",
//         "Improved Forest Management",
//         "Ecosystem infrastructure"
//       ]
//     },
//     {
//       title: "REDD+",
//       description: "Reducing Emissions from Deforestation and Degradation",
//       link: "/what-we-do/redd",
//       icon: "🛡️",
//       subItems: [
//         "36,807 hectares protected",
//         "Andean ecosystem conservation",
//         "Carbon credit verification",
//         "Community empowerment"
//       ]
//     },
//     {
//       title: "ARR",
//       description: "Afforestation, Restoration, and Reforestation",
//       link: "/what-we-do/arr",
//       icon: "🌱",
//       subItems: [
//         "Native tree planting",
//         "Landscape connectivity",
//         "Carbon sequestration",
//         "Job creation"
//       ]
//     },
//     {
//       title: "Biochar",
//       description: "Carbon-rich charcoal for soil improvement",
//       link: "/what-we-do/biochar",
//       icon: "🔥",
//       subItems: [
//         "Soil remediation",
//         "Organic agriculture",
//         "Waste management",
//         "Carbon credits"
//       ]
//     },
//     {
//       title: "Renewable Energy",
//       description: "Sustainable energy solutions",
//       link: "/what-we-do/energy",
//       icon: "⚡",
//       subItems: [
//         "Solar power",
//         "Wind energy",
//         "Hydroelectric",
//         "Biomass"
//       ]
//     },
//     {
//       title: "Cookstoves",
//       description: "Efficient cooking solutions",
//       link: "/what-we-do/cookstoves",
//       icon: "🍳",
//       subItems: [
//         "Rocket stoves",
//         "Gasifier technology",
//         "Deforestation reduction",
//         "Health improvements"
//       ]
//     },
//     {
//       title: "Constructed Wetlands",
//       description: "Natural water treatment systems",
//       link: "/what-we-do/wetlands",
//       icon: "💧",
//       subItems: [
//         "Wastewater treatment",
//         "Flood prevention",
//         "Biodiversity support",
//         "Methane reduction"
//       ]
//     }
//   ];

//   const impactStats = [
//     { number: "1M+", label: "Trees Planted", icon: FiHeart },
//     { number: "500K", label: "Lives Impacted", icon: FiUsers },
//     { number: "100+", label: "Projects Completed", icon: FiShare2 },
//     { number: "50+", label: "Countries Reached", icon: FiArrowRight }
//   ];

//   const successStories = [
//     {
//       title: "Ecosystem Infrastructure REDD+",
//       location: "Western Antioquia, Colombia",
//       impact: "36,807 hectares conserved",
//       benefits: [
//         "Carbon credit verification with VERSA",
//         "Endangered species protection",
//         "Community benefit sharing",
//         "Sustainable land use planning"
//       ],
//       link: "https://uplink.weforum.org/uplink/s/uplink-contribution/a012o00002fK6HJAA0"
//     },
//     {
//       title: "Polylepis Restoration",
//       location: "Andes Mountains",
//       impact: "10M+ trees planted",
//       benefits: [
//         "Water security for downstream communities",
//         "Carbon sequestration",
//         "Indigenous community partnerships",
//         "Ecotourism development"
//       ],
//       link: "https://accion-andina.org"
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             'url("https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-60" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
//           >
//             Creating a Sustainable Future Together
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-xl text-white mb-8 max-w-3xl mx-auto"
//           >
//             Join us in our mission to protect and preserve our planet for future generations.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="flex flex-wrap gap-4 justify-center"
//           >
//             <Link
//               to="/membership/donate"
//               className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center"
//             >
//               Donate Now
//             </Link>
//             <Link
//               to="/get-involved"
//               className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium transition flex items-center"
//             >
//               Get Involved
//             </Link>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Introduction Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="prose-lg text-gray-600 text-center"
//           >
//             <p>
//               In the face of growing environmental challenges, we work with nature to create resilient solutions addressing climate change, biodiversity loss, and human well-being.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Focus Areas Grid */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {focusAreas.map((area, index) => (
//               <motion.div
//                 key={area.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center mb-4">
//                     <span className="text-3xl mr-3">{area.icon}</span>
//                     <h3 className="text-xl font-semibold">{area.title}</h3>
//                   </div>
//                   <p className="text-gray-600 mb-4">{area.description}</p>
//                   <ul className="list-disc list-inside space-y-2">
//                     {area.subItems.map((item) => (
//                       <li key={item} className="text-gray-600">{item}</li>
//                     ))}
//                   </ul>
//                   <Link
//                     to={area.link}
//                     className="mt-4 inline-flex items-center text-green-600 hover:text-green-700 font-medium"
//                   >
//                     Explore Solutions <FiArrowRight className="ml-2" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Impact Stats Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//             {impactStats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all"
//               >
//                 <div className="text-4xl font-bold text-green-600 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Impact Stories Section */}
//       <section className="py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Impact Stories</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {successStories.map((story, index) => (
//               <motion.div
//                 key={story.title}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
//               >
//                 <h3 className="text-2xl font-semibold mb-3">{story.title}</h3>
//                 <div className="flex items-center text-gray-600 mb-4">
//                   <span className="mr-2">📍</span>{story.location}
//                 </div>
//                 <div className="bg-green-100 p-4 rounded-lg mb-4">
//                   <p className="text-green-700 font-medium">Key Impact: {story.impact}</p>
//                 </div>
//                 <ul className="list-disc list-inside space-y-2 mb-6">
//                   {story.benefits.map((benefit) => (
//                     <li key={benefit} className="text-gray-600">✓ {benefit}</li>
//                   ))}
//                 </ul>
//                 <a
//                   href={story.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
//                 >
//                   Explore Project Details <FiArrowRight className="ml-2" />
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-green-600 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
//             <h2 className="text-3xl font-bold mb-6">Join the Movement</h2>
//             <p className="text-xl mb-8 max-w-2xl mx-auto">
//               Help us scale nature-based solutions through conservation, innovation, and community empowerment.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Link
//                 to="/donate"
//                 className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl flex items-center justify-center"
//               >
//                 Support Our Work
//               </Link>
//               <Link
//                 to="/volunteer"
//                 className="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 flex items-center justify-center"
//               >
//                 Become a Volunteer
//               </Link>
//               <a
//                 href="/share"
//                 className="bg-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-800 flex items-center justify-center"
//               >
//                 <FiShare2 className="mr-2" />
//                 Share Our Mission
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;


























import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiShare2, FiHeart, FiUsers, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const focusAreas = [
    {
      title: "Nature-Based Solutions",
      description: "Landscape connectivity, restoration, and ecosystem management",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80",
      link: "/what-we-do/nbs",
      icon: "🌍",
      subItems: [
        "Restoration of native forests",
        "Constructed wetlands",
        "Improved Forest Management",
        "Ecosystem infrastructure"
      ]
    },
    {
      title: "REDD+",
      description: "Reducing Emissions from Deforestation and Degradation",
      image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80",
      link: "/what-we-do/redd",
      icon: "🛡️",
      subItems: [
        "36,807 hectares protected",
        "Andean ecosystem conservation",
        "Carbon credit verification",
        "Community empowerment"
      ]
    },
    {
      title: "ARR",
      description: "Afforestation, Restoration, and Reforestation",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80",
      link: "/what-we-do/arr",
      icon: "🌱",
      subItems: [
        "Native tree planting",
        "Landscape connectivity",
        "Carbon sequestration",
        "Job creation"
      ]
    },
    {
      title: "Biochar",
      description: "Carbon-rich charcoal for soil improvement",
      image: "https://images.unsplash.com/photo-1463569643904-4fbae71ed917?auto=format&fit=crop&q=80",
      link: "/what-we-do/biochar",
      icon: "🔥",
      subItems: [
        "Soil remediation",
        "Organic agriculture",
        "Waste management",
        "Carbon credits"
      ]
    },
    {
      title: "Renewable Energy",
      description: "Sustainable energy solutions",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
      link: "/what-we-do/energy",
      icon: "⚡",
      subItems: [
        "Solar power",
        "Wind energy",
        "Hydroelectric",
        "Biomass"
      ]
    },
    {
      title: "Cookstoves",
      description: "Efficient cooking solutions",
      image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&q=80",
      link: "/what-we-do/cookstoves",
      icon: "🍳",
      subItems: [
        "Rocket stoves",
        "Gasifier technology",
        "Deforestation reduction",
        "Health improvements"
      ]
    },
    {
      title: "Constructed Wetlands",
      description: "Natural water treatment systems",
      image: "https://images.unsplash.com/photo-1500829243541-74b677fecc30?auto=format&fit=crop&q=80",
      link: "/what-we-do/wetlands",
      icon: "💧",
      subItems: [
        "Wastewater treatment",
        "Flood prevention",
        "Biodiversity support",
        "Methane reduction"
      ]
    }
  ];

  const impactStats = [
    { number: "1M+", label: "Trees Planted", icon: FiHeart },
    { number: "500K", label: "Lives Impacted", icon: FiUsers },
    { number: "100+", label: "Projects Completed", icon: FiShare2 },
    { number: "50+", label: "Countries Reached", icon: FiArrowRight }
  ];

  const successStories = [
    {
      title: "Ecosystem Infrastructure REDD+",
      location: "Western Antioquia, Colombia",
      impact: "36,807 hectares conserved",
      benefits: [
        "Carbon credit verification with VERSA",
        "Endangered species protection",
        "Community benefit sharing",
        "Sustainable land use planning"
      ],
      link: "https://uplink.weforum.org/uplink/s/uplink-contribution/a012o00002fK6HJAA0"
    },
    {
      title: "Polylepis Restoration",
      location: "Andes Mountains",
      impact: "10M+ trees planted",
      benefits: [
        "Water security for downstream communities",
        "Carbon sequestration",
        "Indigenous community partnerships",
        "Ecotourism development"
      ],
      link: "https://accion-andina.org"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Creating a Sustainable Future Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white mb-8 max-w-3xl mx-auto"
          >
            Join us in our mission to protect and preserve our planet for future generations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/membership/donate"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center"
            >
              Donate Now
            </Link>
            <Link
              to="/get-involved"
              className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium transition flex items-center"
            >
              Get Involved
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
            className="mt-16"
          >
            <FiChevronDown className="w-12 h-12 text-white mx-auto" />
          </motion.div>
        </div>
      </motion.section>

      {/* Focus Areas Section with Alternating Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Solutions
          </motion.h2>
          
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <div className="flex-1">
                <motion.img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-96 object-cover rounded-xl shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{area.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">{area.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {area.subItems.map((item) => (
                    <li key={item} className="flex items-center text-gray-600">
                      <FiArrowRight className="w-4 h-4 mr-2 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={area.link}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Explore Solutions <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <stat.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Impact Stories
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="mr-2">📍</span>{story.location}
                </div>
                <div className="bg-green-100 p-4 rounded-lg mb-6">
                  <p className="text-green-700 font-medium">Key Impact: {story.impact}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {story.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-gray-600">
                      <FiArrowRight className="w-4 h-4 mr-2 text-green-600" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  View Case Study <FiArrowRight className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Join the Movement</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Help us scale nature-based solutions through conservation, innovation, and community empowerment
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl flex items-center justify-center"
                href="/donate"
              >
                Support Our Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 flex items-center justify-center"
                href="/volunteer"
              >
                Become a Volunteer
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="bg-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-800 flex items-center justify-center"
                href="/share"
              >
                <FiShare2 className="mr-2" />
                Share Our Mission
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
