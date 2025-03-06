// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center h-[600px]"
//         style={{
//           backgroundImage:
//             'url("https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50" />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//           <div className="text-white max-w-3xl">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
//               Creating a Sustainable Future Together
//             </h1>
//             <p className="text-xl mb-8">
//               Join us in our mission to protect and preserve our planet for future generations.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link
//                 to="/membership/donate"
//                 className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition duration-150 ease-in-out"
//               >
//                 Donate Now
//               </Link>
//               <Link
//                 to="/get-involved"
//                 className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium transition duration-150 ease-in-out"
//               >
//                 Get Involved
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Projects */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Impact Areas</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Forest Conservation',
//                 image:
//                   'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
//                 description:
//                   'Protecting and restoring forests to combat climate change and preserve biodiversity.',
//               },
//               {
//                 title: 'Clean Energy',
//                 image:
//                   'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80',
//                 description:
//                   'Advancing renewable energy solutions for a sustainable future.',
//               },
//               {
//                 title: 'Water Conservation',
//                 image:
//                   'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
//                 description:
//                   'Protecting water resources and ensuring access to clean water for communities.',
//               },
//             ].map((project, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
//                   <p className="text-gray-600 mb-4">{project.description}</p>
//                   <Link
//                     to="/what-we-do"
//                     className="inline-flex items-center text-green-600 hover:text-green-700"
//                   >
//                     Learn more
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Impact Stats */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//             {[
//               { number: '1M+', label: 'Trees Planted' },
//               { number: '500K', label: 'Lives Impacted' },
//               { number: '100+', label: 'Projects Completed' },
//               { number: '50+', label: 'Countries Reached' },
//             ].map((stat, index) => (
//               <div key={index}>
//                 <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-green-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
//           <p className="text-white text-xl mb-8">
//             Join our community of environmental champions and help create lasting change.
//           </p>
//           <Link
//             to="/membership"
//             className="inline-block bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg font-medium transition duration-150 ease-in-out"
//           >
//             Become a Member
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { FiShare2 } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const focusAreas = [
    {
      title: "Nature-Based Solutions",
      description: "Landscape connectivity, restoration, and ecosystem management",
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
        className="relative bg-green-50 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Unlock the Power of Nature
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Discover how nature-based solutions can mitigate climate change, enhance biodiversity, 
            and improve human well-being
          </motion.p>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose-lg text-gray-600 text-center"
          >
            <p>
              In the face of growing environmental challenges, we work with nature to create 
              resilient solutions addressing climate change, biodiversity loss, and human 
              well-being. Our financial sustainability model combines REDD+ conservation with 
              ecological corridor design and community-led restoration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{area.icon}</span>
                    <h3 className="text-xl font-semibold">{area.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {area.subItems.map((item) => (
                      <li key={item} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                  <a
                    href={area.link}
                    className="mt-4 inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Explore Solutions
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Impact Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-3">{story.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="mr-2">📍</span>
                  {story.location}
                </div>
                <div className="bg-green-100 p-4 rounded-lg mb-4">
                  <p className="text-green-700 font-medium">Key Impact: {story.impact}</p>
                </div>
                <ul className="list-check list-inside space-y-2 mb-6">
                  {story.benefits.map((benefit) => (
                    <li key={benefit} className="text-gray-600">✓ {benefit}</li>
                  ))}
                </ul>
                <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Explore Project Details
                  <span className="ml-2">→</span>
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
              Help us scale nature-based solutions through conservation, innovation, and 
              community empowerment
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