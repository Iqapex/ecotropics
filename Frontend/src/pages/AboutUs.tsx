// import React from 'react';
// import { Users, History, MapPin } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const team = [
//   {
//     name: 'Dr. Sarah Johnson',
//     role: 'Executive Director',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
//     bio: 'Leading environmental scientist with over 15 years of experience in conservation.'
//   },
//   {
//     name: 'Michael Chen',
//     role: 'Head of Operations',
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
//     bio: 'Expert in sustainable development and project management.'
//   },
//   {
//     name: 'Dr. Emily Rodriguez',
//     role: 'Research Director',
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
//     bio: 'Specializes in climate change research and environmental policy.'
//   },
//   {
//     name: 'James Wilson',
//     role: 'Community Outreach',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
//     bio: 'Passionate about connecting communities with environmental initiatives.'
//   }
// ];

// const locations = [
//   {
//     country: 'United States',
//     city: 'San Francisco',
//     address: '123 Green Street',
//     image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
//   },
//   {
//     country: 'Brazil',
//     city: 'São Paulo',
//     address: '456 Amazon Avenue',
//     image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
//   },
//   {
//     country: 'Kenya',
//     city: 'Nairobi',
//     address: '789 Safari Road',
//     image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1167&q=80'
//   }
// ];

// export default function AboutUs() {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <div className="relative py-24 bg-green-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
//               About EcoAction
//             </h1>
//             <p className="mt-6 max-w-2xl mx-auto text-xl text-green-100">
//               Learn about our mission, our team, and our global impact in environmental conservation.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Mission Section */}
//       <div className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               At EcoAction, we're dedicated to creating a sustainable future through innovative environmental solutions,
//               community engagement, and global collaboration. Our work spans across continents, touching lives and
//               preserving ecosystems for generations to come.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Team Section */}
//       <div className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
//             <p className="mt-4 text-xl text-gray-600">
//               Meet the passionate individuals driving our mission forward.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
//                   <p className="text-green-600 mb-2">{member.role}</p>
//                   <p className="text-gray-600">{member.bio}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Locations Section */}
//       <div className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">Where We Work</h2>
//             <p className="mt-4 text-xl text-gray-600">
//               Our global presence allows us to make an impact where it matters most.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {locations.map((location, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   src={location.image}
//                   alt={location.city}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-900">{location.country}</h3>
//                   <p className="text-green-600 mb-2">{location.city}</p>
//                   <p className="text-gray-600">{location.address}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-green-600 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
//           <p className="text-xl text-green-100 mb-8">
//             Together, we can make a lasting impact on our planet's future.
//           </p>
//           <Link
//             to="/get-involved"
//             className="inline-block bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-8 rounded-lg transition duration-150 ease-in-out"
//           >
//             Get Involved
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }




import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Dr. María González",
      role: "Founder & Executive Director",
      bio: "Environmental scientist with 20+ years experience in tropical ecosystem management. PhD in Applied Ecology from Universidad Nacional de Colombia.",
      img: "/team/maria.jpg"
    },
    {
      name: "James Carter",
      role: "Chief Technology Officer",
      bio: "Full-stack developer and data science expert specializing in environmental applications. Leads our digital transformation initiatives.",
      img: "/team/james.jpg"
    },
    {
      name: "Luisa Fernández",
      role: "Field Operations Director",
      bio: "Sustainable agriculture specialist managing our on-ground projects in Colombia. USAID Farmer-to-Farmer Award recipient 2021.",
      img: "/team/luisa.jpg"
    },
    {
      name: "Raj Patel",
      role: "Carbon Markets Expert",
      bio: "Climate finance professional with expertise in REDD+ and biocredit certification. Former VERRA methodology developer.",
      img: "/team/raj.jpg"
    },
    {
      name: "Amina Diallo",
      role: "Community Outreach Lead",
      bio: "Social anthropologist specializing in indigenous community engagement. Fluent in Spanish and 3 indigenous languages.",
      img: "/team/amina.jpg"
    },
    {
      name: "Carlos Rivera",
      role: "Restoration Ecologist",
      bio: "Expert in Andean ecosystem restoration. Developed our Polylepis replanting methodology.",
      img: "/team/carlos.jpg"
    }
  ];

  const timeline = [
    {
      year: 2008,
      title: "Organization Founded",
      description: "Established in Washington D.C. by environmental scientists and engineers"
    },
    {
      year: 2012,
      title: "Philosophy Chapter Published",
      description: "Released our foundational chapter on sustainable development principles",
      link: "https://www.intechopen.com/chapters/29849"
    },
    {
      year: 2016,
      title: "Ecosystem Infrastructure Program",
      description: "Launched conservation program in Antioquia, Colombia"
    },
    {
      year: 2021,
      title: "USAID Award",
      description: "Received Farmer-to-Farmer Volunteer of the Year recognition"
    },
    {
      year: 2025,
      title: "REDD+ Verification",
      description: "Dual verification underway for Project 47 with VVB Versa",
      link: "https://www.ecoregistry.io/projects/47"
    }
  ];

  const locations = [
    {
      name: "Antioquia, Colombia",
      projects: "REDD+ Project 47, Polylepis Restoration"
    },
    {
      name: "Andes Mountain Region",
      projects: "Watershed Management, Ecotourism Development"
    },
    {
      name: "Pantropical Initiatives",
      projects: "Biochar Programs, Cookstove Distribution"
    },
    {
      name: "Washington D.C., USA",
      projects: "Policy Advocacy, International Partnerships"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-green-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Ecotropics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering nature-based solutions since 2008 through science, innovation, and community partnership
          </p>
        </div>
      </motion.section>

      {/* Our People */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-green-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 w-1 h-full bg-green-200 transform -translate-x-1/2"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}
              >
                <div className="flex items-center md:absolute md:top-0 md:w-full">
                  {index % 2 !== 0 && (
                    <div className="hidden md:block flex-grow mr-4 border-t-2 border-green-600"></div>
                  )}
                  <div className="w-6 h-6 bg-green-600 rounded-full shrink-0"></div>
                  {index % 2 === 0 && (
                    <div className="hidden md:block flex-grow ml-4 border-t-2 border-green-600"></div>
                  )}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg mt-4 md:mt-0">
                  <div className="flex items-center mb-2">
                    <span className="text-green-600 font-bold text-xl mr-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="text-green-600 hover:text-green-700 inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Future Plans */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 bg-green-600 text-white p-8 rounded-xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Future Vision: 2025-2030</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Key Initiatives</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Drone-assisted reforestation programs
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Certified native tree nurseries
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Green schools initiative
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Impact Goals</h4>
                <ul className="space-y-2">
                  <li>10M+ tons CO2 sequestered annually</li>
                  <li>500K+ hectares under conservation</li>
                  <li>100+ community partnerships</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Global Presence</h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gray-100 h-96 rounded-xl mb-12 flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-[url('/map-placeholder.svg')] bg-cover opacity-50"></div>
            <div className="relative z-10 text-center">
              <p className="text-gray-600 mb-4">Interactive map available on</p>
              <a
                href="[Google Drive Link]"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                target="_blank"
                rel="noopener"
              >
                View Full Map
              </a>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-green-50 rounded-xl border border-green-100"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {location.name}
                </h3>
                <p className="text-gray-600 text-sm">{location.projects}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <a
              href="/what-we-do"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Explore Our Global Projects
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;