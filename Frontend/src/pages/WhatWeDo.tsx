// // import React from 'react';
// // import { ArrowRight } from 'lucide-react';
// // import { Link } from 'react-router-dom';

// // const solutions = [
// //   {
// //     title: 'Nature Based Solutions',
// //     image: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
// //     description: 'Implementing sustainable solutions that work in harmony with nature to address societal challenges.',
// //     link: '/what-we-do/nature-solutions'
// //   },
// //   {
// //     title: 'REDD+',
// //     image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80',
// //     description: 'Reducing emissions from deforestation and forest degradation while promoting conservation.',
// //     link: '/what-we-do/redd-plus'
// //   },
// //   {
// //     title: 'Afforestation & Reforestation',
// //     image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
// //     description: 'Restoring forests and creating new woodland areas to combat climate change.',
// //     link: '/what-we-do/arr'
// //   },
// //   {
// //     title: 'Biochar',
// //     image: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
// //     description: 'Converting biomass into a powerful soil amendment that sequesters carbon.',
// //     link: '/what-we-do/biochar'
// //   },
// //   {
// //     title: 'Renewable Energy',
// //     image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80',
// //     description: 'Advancing clean energy solutions for a sustainable future.',
// //     link: '/what-we-do/renewable-energy'
// //   },
// //   {
// //     title: 'Cookstoves',
// //     image: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
// //     description: 'Providing efficient cooking solutions to reduce emissions and improve health.',
// //     link: '/what-we-do/cookstoves'
// //   }
// // ];

// // export default function WhatWeDo() {
// //   return (
// //     <div className="bg-white">
// //       {/* Hero Section */}
// //       <div className="relative py-24 bg-green-600">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center">
// //             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
// //               Our Environmental Solutions
// //             </h1>
// //             <p className="mt-6 max-w-2xl mx-auto text-xl text-green-100">
// //               Discover how we're working to create a more sustainable world through innovative environmental solutions.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Solutions Grid */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {solutions.map((solution, index) => (
// //             <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
// //               <div className="h-48 w-full overflow-hidden">
// //                 <img
// //                   src={solution.image}
// //                   alt={solution.title}
// //                   className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
// //                 />
// //               </div>
// //               <div className="p-6">
// //                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
// //                 <p className="text-gray-600 mb-4">{solution.description}</p>
// //                 <Link
// //                   to={solution.link}
// //                   className="inline-flex items-center text-green-600 hover:text-green-700"
// //                 >
// //                   Learn more
// //                   <ArrowRight className="ml-2 h-4 w-4" />
// //                 </Link>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* CTA Section */}
// //       <div className="bg-gray-50 py-16">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center">
// //             <h2 className="text-3xl font-bold text-gray-900 mb-4">
// //               Ready to Make an Impact?
// //             </h2>
// //             <p className="text-xl text-gray-600 mb-8">
// //               Join us in our mission to create a sustainable future for all.
// //             </p>
// //             <Link
// //               to="/get-involved"
// //               className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition duration-150 ease-in-out"
// //             >
// //               Get Involved
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }





























// const solutions = [
//   // ... Previous solutions (Nature-Based Solutions & REDD+)

//   {
//     title: "ARR",
//     icon: "🌱",
//     content: {
//       definition: "Afforestation, Restoration, and Reforestation initiatives for landscape connectivity",
//       pillars: [
//         {
//           title: "Afforestation",
//           items: [
//             "New forests on non-forested lands",
//             "Native species selection",
//             "Carbon farming systems"
//           ]
//         },
//         {
//           title: "Restoration",
//           items: [
//             "Degraded ecosystem revival",
//             "Soil rehabilitation",
//             "Wildlife habitat creation"
//           ]
//         },
//         {
//           title: "Reforestation",
//           items: [
//             "Cleared land rehabilitation",
//             "Mixed-species planting",
//             "Sustainable harvest planning"
//           ]
//         }
//       ],
//       impact: {
//         stats: [
//           "15-20 tCO2e/ha/yr sequestration",
//           "40% biodiversity increase",
//           "200+ rural jobs created"
//         ],
//         methodology: "Cercarbono ARR-001"
//       }
//     }
//   },
//   {
//     title: "Biochar",
//     icon: "🔥",
//     content: {
//       production: {
//         process: [
//           "Biomass feedstock collection",
//           "Pyrolysis (400-700°C)",
//           "Biochar activation",
//           "Quality certification"
//         ],
//         capacity: "5 tons/day mobile units"
//       },
//       applications: [
//         {
//           title: "Agriculture",
//           items: [
//             "Soil amendment (10-20 t/ha)",
//             "Water retention improvement",
//             "Fertilizer use reduction"
//           ]
//         },
//         {
//           title: "Energy",
//           items: [
//             "Bio-oil production",
//             "Syngas generation",
//             "Carbon-negative fuel"
//           ]
//         }
//       ]
//     }
//   },
//   {
//     title: "Renewable Energy",
//     icon: "⚡",
//     content: {
//       technologies: [
//         {
//           type: "Solar",
//           capacity: "100kW microgrids",
//           features: [
//             "Community-scale installations",
//             "Battery storage systems",
//             "Agrivoltaic integration"
//           ]
//         },
//         {
//           type: "Wind",
//           capacity: "50-200kW turbines",
//           features: [
//             "Small-scale wind farms",
//             "Hybrid solar-wind systems",
//             "Grid stabilization tech"
//           ]
//         },
//         {
//           type: "Hydro",
//           capacity: "10-500kW",
//           features: [
//             "Run-of-river systems",
//             "Fish-friendly turbines",
//             "Sediment management"
//           ]
//         }
//       ],
//       impact: {
//         emissions: "15,000 tCO2e/yr offset",
//         households: "10,000+ powered"
//       }
//     }
//   },
//   {
//     title: "Cookstoves",
//     icon: "🍳",
//     content: {
//       models: [
//         {
//           type: "Rocket Stove",
//           efficiency: "30-40% improvement",
//           features: [
//             "60% fuel reduction",
//             "1.5 ton CO2e/yr savings",
//             "Local manufacturing"
//           ]
//         },
//         {
//           type: "Gasifier",
//           efficiency: "50-60% improvement",
//           features: [
//             "Biochar production",
//             "Indoor emission reduction",
//             "Multi-fuel capability"
//           ]
//         }
//       ],
//       distribution: {
//         units: "15,000+ deployed",
//         regions: ["Andes", "Amazon", "Central America"]
//       }
//     }
//   },
//   {
//     title: "Constructed Wetlands",
//     icon: "💧",
//     content: {
//       types: [
//         {
//           design: "Free Water Surface (FWS)",
//           application: "Wastewater treatment",
//           benefits: [
//             "90% BOD removal",
//             "Habitat creation",
//             "Evapotranspiration control"
//           ]
//         },
//         {
//           design: "Subsurface Flow (SSF)",
//           application: "Stormwater management",
//           benefits: [
//             "80% nutrient removal",
//             "Flood peak reduction",
//             "Pathogen filtration"
//           ]
//         }
//       ],
//       caseStudy: {
//         title: "Andean Community Wetland",
//         impact: [
//           "50% methane reduction",
//           "20 native species supported",
//           "500 m³/day capacity"
//         ]
//       }
//     }
//   }
// ];

// // In the JSX return statement
// {solutions.map((solution, index) => (
//   <motion.div key={solution.title} /* ... */>
    
//     {/* ARR Section */}
//     {solution.title === "ARR" && (
//       <div className="space-y-8">
//         <div className="prose-lg text-gray-600">
//           <p>{solution.content.definition}</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {solution.content.pillars.map((pillar) => (
//             <div key={pillar.title} className="bg-green-50 p-6 rounded-xl">
//               <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
//               <ul className="list-disc list-inside space-y-2">
//                 {pillar.items.map((item) => (
//                   <li key={item} className="text-gray-600">{item}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="bg-green-100 p-6 rounded-xl">
//             <h3 className="text-xl font-semibold mb-4">Impact Metrics</h3>
//             <ul className="space-y-2">
//               {solution.content.impact.stats.map((stat) => (
//                 <li key={stat} className="text-gray-600">✓ {stat}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="bg-white p-6 rounded-xl border border-green-200">
//             <h3 className="text-xl font-semibold mb-4">Methodology</h3>
//             <p className="text-gray-600">
//               {solution.content.impact.methodology} Certified
//             </p>
//           </div>
//         </div>
//       </div>
//     )}

//     {/* Biochar Section */}
//     {solution.title === "Biochar" && (
//       <div className="space-y-8">
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="bg-green-50 p-6 rounded-xl">
//             <h3 className="text-xl font-semibold mb-4">Production Process</h3>
//             <ol className="list-decimal list-inside space-y-2">
//               {solution.content.production.process.map((step) => (
//                 <li key={step} className="text-gray-600">{step}</li>
//               ))}
//             </ol>
//             <p className="mt-4 text-green-600 font-medium">
//               Capacity: {solution.content.production.capacity}
//             </p>
//           </div>
          
//           <div className="bg-green-50 p-6 rounded-xl">
//             <h3 className="text-xl font-semibold mb-4">Key Applications</h3>
//             <div className="space-y-6">
//               {solution.content.applications.map((app) => (
//                 <div key={app.title} className="bg-white p-4 rounded-lg">
//                   <h4 className="font-medium mb-2">{app.title}</h4>
//                   <ul className="list-disc list-inside">
//                     {app.items.map((item) => (
//                       <li key={item} className="text-gray-600">{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     )}

//     {/* Renewable Energy Section */}
//     {solution.title === "Renewable Energy" && (
//       <div className="space-y-8">
//         <div className="grid md:grid-cols-3 gap-6">
//           {solution.content.technologies.map((tech) => (
//             <div key={tech.type} className="bg-green-50 p-6 rounded-xl">
//               <h3 className="text-xl font-semibold mb-2">{tech.type}</h3>
//               <p className="text-green-600 mb-4">{tech.capacity}</p>
//               <ul className="list-disc list-inside space-y-2">
//                 {tech.features.map((feature) => (
//                   <li key={feature} className="text-gray-600">{feature}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="bg-green-100 p-6 rounded-xl">
//             <h3 className="text-xl font-semibold mb-2">Annual Impact</h3>
//             <p className="text-2xl font-bold text-green-600">
//               {solution.content.impact.emissions}
//             </p>
//           </div>
//           <div className="bg-green-100 p-6 rounded-xl">
//             <h3 className="text-xl font-semibold mb-2">Energy Access</h3>
//             <p className="text-2xl font-bold text-green-600">
//               {solution.content.impact.households}
//             </p>
//           </div>
//         </div>
//       </div>
//     )}

//     {/* Cookstoves Section */}
//     {solution.title === "Cookstoves" && (
//       <div className="space-y-8">
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="space-y-6">
//             {solution.content.models.map((model) => (
//               <div key={model.type} className="bg-green-50 p-6 rounded-xl">
//                 <h3 className="text-xl font-semibold mb-2">{model.type}</h3>
//                 <p className="text-green-600 mb-3">
//                   Efficiency: {model.efficiency}
//                 </p>
//                 <ul className="list-disc list-inside">
//                   {model.features.map((feature) => (
//                     <li key={feature} className="text-gray-600">{feature}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
          
//           <div className="bg-green-100 p-6 rounded-xl">
//             <h3 className="text-xl font-semibold mb-4">Distribution Network</h3>
//             <div className="space-y-4">
//               <p className="text-2xl font-bold text-green-600">
//                 {solution.content.distribution.units}
//               </p>
//               <div className="bg-white p-4 rounded-lg">
//                 <h4 className="font-medium mb-2">Key Regions</h4>
//                 <ul className="list-disc list-inside">
//                   {solution.content.distribution.regions.map((region) => (
//                     <li key={region} className="text-gray-600">{region}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )}

//     {/* Constructed Wetlands Section */}
//     {solution.title === "Constructed Wetlands" && (
//       <div className="space-y-8">
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="space-y-6">
//             {solution.content.types.map((type) => (
//               <div key={type.design} className="bg-green-50 p-6 rounded-xl">
//                 <h3 className="text-xl font-semibold mb-2">{type.design}</h3>
//                 <p className="text-green-600 mb-3">{type.application}</p>
//                 <ul className="list-disc list-inside">
//                   {type.benefits.map((benefit) => (
//                     <li key={benefit} className="text-gray-600">{benefit}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           <div className="bg-green-100 p-6 rounded-xl">
//             <h3 className="text-xl font-semibold mb-4">Case Study: {solution.content.caseStudy.title}</h3>
//             <ul className="list-check list-inside space-y-2">
//               {solution.content.caseStudy.impact.map((impact) => (
//                 <li key={impact} className="text-gray-600">✓ {impact}</li>
//               ))}
//             </ul>
//             <div className="mt-4 p-4 bg-white rounded-lg">
//               <p className="text-sm text-gray-600">
//                 Verified by Cercarbono Wetland Methodology v2.1
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     )}
//   </motion.div>
// ))}


// import { motion } from "framer-motion";
// import { Navbar, Footer } from "./components";
// import { FiArrowRight, FiExternalLink } from "react-icons/fi";

// const WhatWeDo = () => {
//   const solutions = [
//     {
//       title: "Nature-Based Solutions",
//       icon: "🌍",
//       content: {
//         definition: "Landscape connectivity, restoration, reforestation, and ecosystem management to address societal challenges",
//         approaches: [
//           {
//             title: "Restoration",
//             items: [
//               "Planting native trees in degraded areas",
//               "Reviving ecosystem processes",
//               "Creating wildlife corridors"
//             ]
//           },
//           {
//             title: "Reforestation",
//             items: [
//               "Environmental-friendly tree species",
//               "Sustainable harvesting at maturity",
//               "Landscape connectivity planning"
//             ]
//           },
//           {
//             title: "Constructed Wetlands",
//             items: [
//               "Natural wastewater treatment",
//               "Flood prevention systems",
//               "Methane reduction techniques"
//             ]
//           },
//           {
//             title: "Improved Forest Management",
//             items: [
//               "Sustainable logging practices",
//               "Fire prevention strategies",
//               "Community-based monitoring"
//             ]
//           }
//         ],
//         caseStudy: {
//           title: "Andean Corridor Project",
//           link: "https://uplink.weforum.org/uplink/s/uplink-contribution/a012o00002fK6HJAA0"
//         }
//       }
//     },
//     {
//       title: "REDD+",
//       icon: "🛡️",
//       content: {
//         definition: "Reducing Emissions from Deforestation and Forest Degradation",
//         methodology: [
//           "Baseline deforestation analysis",
//           "Community-led conservation agreements",
//           "Satellite monitoring systems",
//           "VERSA verification process"
//         ],
//         currentProject: {
//           title: "Antioquia REDD+ Project 47",
//           stats: [
//             "36,807 hectares protected",
//             "12 endangered species habitats",
//             "1,200+ community members engaged"
//           ],
//           link: "https://www.ecoregistry.io/projects/47"
//         }
//       }
//     },
//     // Add similar detailed objects for ARR, Biochar, Renewable Energy, Cookstoves, Constructed Wetlands
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Hero Section */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="bg-green-50 py-20"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             Our Climate Solutions Portfolio
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive approaches combining conservation, technology, and community empowerment
//           </p>
//         </div>
//       </motion.section>

//       {/* Solutions Grid */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {solutions.map((solution, index) => (
//             <motion.div
//               key={solution.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mb-20 last:mb-0"
//             >
//               <div className="flex items-center mb-8">
//                 <span className="text-4xl mr-4">{solution.icon}</span>
//                 <h2 className="text-3xl font-bold">{solution.title}</h2>
//               </div>

//               {/* NBS Section */}
//               {solution.title === "Nature-Based Solutions" && (
//                 <div className="space-y-8">
//                   <div className="prose-lg text-gray-600">
//                     <p>{solution.content.definition}</p>
//                   </div>

//                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {solution.content.approaches.map((approach) => (
//                       <motion.div
//                         key={approach.title}
//                         whileHover={{ y: -5 }}
//                         className="bg-green-50 p-6 rounded-xl"
//                       >
//                         <h3 className="text-xl font-semibold mb-4">{approach.title}</h3>
//                         <ul className="list-disc list-inside space-y-2">
//                           {approach.items.map((item) => (
//                             <li key={item} className="text-gray-600">{item}</li>
//                           ))}
//                         </ul>
//                       </motion.div>
//                     ))}
//                   </div>

//                   <motion.div
//                     whileHover={{ x: 5 }}
//                     className="mt-8 p-6 bg-green-100 rounded-xl"
//                   >
//                     <a
//                       href={solution.content.caseStudy.link}
//                       className="flex items-center text-green-600 hover:text-green-700"
//                     >
//                       <span className="mr-2">Case Study: {solution.content.caseStudy.title}</span>
//                       <FiExternalLink />
//                     </a>
//                   </motion.div>
//                 </div>
//               )}

//               {/* REDD+ Section */}
//               {solution.title === "REDD+" && (
//                 <div className="space-y-8">
//                   <div className="prose-lg text-gray-600">
//                     <p>{solution.content.definition}</p>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-8">
//                     <div className="bg-green-50 p-6 rounded-xl">
//                       <h3 className="text-xl font-semibold mb-4">Methodology</h3>
//                       <ul className="list-check list-inside space-y-2">
//                         {solution.content.methodology.map((item) => (
//                           <li key={item} className="text-gray-600">✓ {item}</li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="bg-green-100 p-6 rounded-xl">
//                       <h3 className="text-xl font-semibold mb-4">Current Project</h3>
//                       <h4 className="text-lg font-medium mb-2">
//                         {solution.content.currentProject.title}
//                       </h4>
//                       <ul className="list-disc list-inside space-y-2 mb-4">
//                         {solution.content.currentProject.stats.map((stat) => (
//                           <li key={stat} className="text-gray-600">{stat}</li>
//                         ))}
//                       </ul>
//                       <a
//                         href={solution.content.currentProject.link}
//                         className="inline-flex items-center text-green-600 hover:text-green-700"
//                       >
//                         Project Registry
//                         <FiExternalLink className="ml-2" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Repeat similar structures for other solutions */}

//             </motion.div>
//           ))}

//           {/* ARR Section */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="bg-white p-8 rounded-xl shadow-lg my-12"
//           >
//             <h2 className="text-3xl font-bold mb-6">ARR (Afforestation, Restoration, Reforestation)</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-green-50 p-6 rounded-xl">
//                 <h3 className="text-xl font-semibold mb-4">Climate Impact</h3>
//                 <ul className="space-y-2">
//                   <li>15-20 tons CO2/hectare/year sequestration</li>
//                   <li>Ecosystem service valuation</li>
//                   <li>Biodiversity credit stacking</li>
//                 </ul>
//               </div>
//               <div className="bg-green-50 p-6 rounded-xl">
//                 <h3 className="text-xl font-semibold mb-4">Community Benefits</h3>
//                 <ul className="space-y-2">
//                   <li>Certified nursery development</li>
//                   <li>Agroforestry training programs</li>
//                   <li>Ecotourism opportunities</li>
//                 </ul>
//               </div>
//               <div className="bg-green-50 p-6 rounded-xl">
//                 <h3 className="text-xl font-semibold mb-4">Technology</h3>
//                 <ul className="space-y-2">
//                   <li>Drone seed bombing</li>
//                   <li>GIS corridor planning</li>
//                   <li>Blockchain traceability</li>
//                 </ul>
//               </div>
//             </div>
//           </motion.div>

//           {/* Biochar Section */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="bg-gray-50 p-8 rounded-xl my-12"
//           >
//             <h2 className="text-3xl font-bold mb-6">Biochar Solutions</h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Production Process</h3>
//                 <ul className="list-decimal list-inside space-y-2">
//                   <li>Biomass collection from agricultural waste</li>
//                   <li>Pyrolysis at 400-700°C in oxygen-free environment</li>
//                   <li>Biochar activation and quality testing</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Applications</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {['Soil Amendment', 'Water Filtration', 'Carbon Credits', 'Energy Production'].map((app) => (
//                     <div key={app} className="bg-white p-4 rounded-lg text-center">
//                       {app}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Add similar detailed sections for Renewable Energy, Cookstoves, Constructed Wetlands */}

//         </div>
//       </section>

//       {/* Global Impact Section */}
//       <section className="bg-green-600 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold mb-12 text-center">Cumulative Impact</h2>
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             {[
//               { value: "36K+", label: "Hectares Conserved" },
//               { value: "2.1M", label: "Tons CO2e Reduced" },
//               { value: "120+", label: "Endangered Species Protected" },
//               { value: "15K+", label: "Community Members Engaged" }
//             ].map((metric, index) => (
//               <motion.div
//                 key={metric.label}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="p-6 bg-green-700 rounded-xl"
//               >
//                 <div className="text-4xl font-bold mb-2">{metric.value}</div>
//                 <div className="text-lg">{metric.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default WhatWeDo;

import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WhatWeDo = () => {
  const solutions = [
    {
      title: "Nature-Based Solutions",
      icon: "🌍",
      content: {
        definition:
          "Landscape connectivity, restoration, reforestation, and ecosystem management to address societal challenges.",
        approaches: [
          {
            title: "Restoration",
            items: [
              "Planting native trees in degraded areas",
              "Reviving ecosystem processes",
              "Creating wildlife corridors"
            ]
          },
          {
            title: "Reforestation",
            items: [
              "Environmental-friendly tree species",
              "Sustainable harvesting at maturity",
              "Landscape connectivity planning"
            ]
          },
          {
            title: "Constructed Wetlands",
            items: [
              "Natural wastewater treatment",
              "Flood prevention systems",
              "Methane reduction techniques"
            ]
          },
          {
            title: "Improved Forest Management",
            items: [
              "Sustainable logging practices",
              "Fire prevention strategies",
              "Community-based monitoring"
            ]
          }
        ],
        caseStudy: {
          title: "Andean Corridor Project",
          link: "https://uplink.weforum.org/uplink/s/uplink-contribution/a012o00002fK6HJAA0"
        }
      }
    },
    {
      title: "REDD+",
      icon: "🛡️",
      content: {
        definition: "Reducing Emissions from Deforestation and Forest Degradation.",
        methodology: [
          "Baseline deforestation analysis",
          "Community-led conservation agreements",
          "Satellite monitoring systems",
          "VERSA verification process"
        ],
        currentProject: {
          title: "Antioquia REDD+ Project 47",
          stats: [
            "36,807 hectares protected",
            "12 endangered species habitats",
            "1,200+ community members engaged"
          ],
          link: "https://www.ecoregistry.io/projects/47"
        }
      }
    },
    {
      title: "ARR",
      icon: "🌱",
      content: {
        definition:
          "Afforestation, Restoration, and Reforestation initiatives for landscape connectivity.",
        pillars: [
          {
            title: "Afforestation",
            items: [
              "New forests on non-forested lands",
              "Native species selection",
              "Carbon farming systems"
            ]
          },
          {
            title: "Restoration",
            items: [
              "Degraded ecosystem revival",
              "Soil rehabilitation",
              "Wildlife habitat creation"
            ]
          },
          {
            title: "Reforestation",
            items: [
              "Cleared land rehabilitation",
              "Mixed-species planting",
              "Sustainable harvest planning"
            ]
          }
        ],
        impact: {
          stats: [
            "15-20 tCO2e/ha/yr sequestration",
            "40% biodiversity increase",
            "200+ rural jobs created"
          ],
          methodology: "Cercarbono ARR-001"
        }
      }
    },
    {
      title: "Biochar",
      icon: "🔥",
      content: {
        production: {
          process: [
            "Biomass feedstock collection",
            "Pyrolysis (400-700°C)",
            "Biochar activation",
            "Quality certification"
          ],
          capacity: "5 tons/day mobile units"
        },
        applications: [
          {
            title: "Agriculture",
            items: [
              "Soil amendment (10-20 t/ha)",
              "Water retention improvement",
              "Fertilizer use reduction"
            ]
          },
          {
            title: "Energy",
            items: [
              "Bio-oil production",
              "Syngas generation",
              "Carbon-negative fuel"
            ]
          }
        ]
      }
    },
    {
      title: "Renewable Energy",
      icon: "⚡",
      content: {
        technologies: [
          {
            type: "Solar",
            capacity: "100kW microgrids",
            features: [
              "Community-scale installations",
              "Battery storage systems",
              "Agrivoltaic integration"
            ]
          },
          {
            type: "Wind",
            capacity: "50-200kW turbines",
            features: [
              "Small-scale wind farms",
              "Hybrid solar-wind systems",
              "Grid stabilization tech"
            ]
          },
          {
            type: "Hydro",
            capacity: "10-500kW",
            features: [
              "Run-of-river systems",
              "Fish-friendly turbines",
              "Sediment management"
            ]
          }
        ],
        impact: {
          emissions: "15,000 tCO2e/yr offset",
          households: "10,000+ powered"
        }
      }
    },
    {
      title: "Cookstoves",
      icon: "🍳",
      content: {
        models: [
          {
            type: "Rocket Stove",
            efficiency: "30-40% improvement",
            features: [
              "60% fuel reduction",
              "1.5 ton CO2e/yr savings",
              "Local manufacturing"
            ]
          },
          {
            type: "Gasifier",
            efficiency: "50-60% improvement",
            features: [
              "Biochar production",
              "Indoor emission reduction",
              "Multi-fuel capability"
            ]
          }
        ],
        distribution: {
          units: "15,000+ deployed",
          regions: ["Andes", "Amazon", "Central America"]
        }
      }
    },
    {
      title: "Constructed Wetlands",
      icon: "💧",
      content: {
        types: [
          {
            design: "Free Water Surface (FWS)",
            application: "Wastewater treatment",
            benefits: [
              "90% BOD removal",
              "Habitat creation",
              "Evapotranspiration control"
            ]
          },
          {
            design: "Subsurface Flow (SSF)",
            application: "Stormwater management",
            benefits: [
              "80% nutrient removal",
              "Flood peak reduction",
              "Pathogen filtration"
            ]
          }
        ],
        caseStudy: {
          title: "Andean Community Wetland",
          impact: [
            "50% methane reduction",
            "20 native species supported",
            "500 m³/day capacity"
          ]
        }
      }
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
            Our Climate Solutions Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive approaches combining conservation, technology, and community empowerment.
          </p>
        </div>
      </motion.section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 last:mb-0"
            >
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-4">{solution.icon}</span>
                <h2 className="text-3xl font-bold">{solution.title}</h2>
              </div>

              {/* Nature-Based Solutions */}
              {solution.title === "Nature-Based Solutions" && (
                <div className="space-y-8">
                  <div className="prose-lg text-gray-600">
                    <p>{solution.content.definition}</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solution.content.approaches?.map((approach) => (
                      <motion.div
                        key={approach.title}
                        whileHover={{ y: -5 }}
                        className="bg-green-50 p-6 rounded-xl"
                      >
                        <h3 className="text-xl font-semibold mb-4">{approach.title}</h3>
                        <ul className="list-disc list-inside space-y-2">
                          {approach.items.map((item) => (
                            <li key={item} className="text-gray-600">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-8 p-6 bg-green-100 rounded-xl"
                  >
                    <a
                      href={solution.content.caseStudy?.link}
                      className="flex items-center text-green-600 hover:text-green-700"
                    >
                      <span className="mr-2">
                        Case Study: {solution.content.caseStudy?.title}
                      </span>
                      <FiExternalLink />
                    </a>
                  </motion.div>
                </div>
              )}

              {/* REDD+ */}
              {solution.title === "REDD+" && (
                <div className="space-y-8">
                  <div className="prose-lg text-gray-600">
                    <p>{solution.content.definition}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4">Methodology</h3>
                      <ul className="list-check list-inside space-y-2">
                        {solution.content.methodology?.map((item) => (
                          <li key={item} className="text-gray-600">
                            ✓ {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green-100 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4">
                        Current Project
                      </h3>
                      <h4 className="text-lg font-medium mb-2">
                        {solution.content.currentProject?.title}
                      </h4>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        {solution.content.currentProject?.stats?.map((stat) => (
                          <li key={stat} className="text-gray-600">
                            {stat}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={solution.content.currentProject?.link}
                        className="inline-flex items-center text-green-600 hover:text-green-700"
                      >
                        Project Registry <FiExternalLink className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* ARR */}
              {solution.title === "ARR" && (
                <div className="space-y-8">
                  <div className="prose-lg text-gray-600">
                    <p>{solution.content.definition}</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {solution.content.pillars?.map((pillar) => (
                      <div
                        key={pillar.title}
                        className="bg-green-50 p-6 rounded-xl"
                      >
                        <h3 className="text-xl font-semibold mb-4">
                          {pillar.title}
                        </h3>
                        <ul className="list-disc list-inside space-y-2">
                          {pillar.items.map((item) => (
                            <li key={item} className="text-gray-600">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-100 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4">
                        Impact Metrics
                      </h3>
                      <ul className="space-y-2">
                        {solution.content.impact?.stats?.map((stat) => (
                          <li key={stat} className="text-gray-600">
                            ✓ {stat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-semibold mb-4">
                        Methodology
                      </h3>
                      <p className="text-gray-600">
                        {solution.content.impact?.methodology} Certified
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Biochar */}
              {solution.title === "Biochar" && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4">
                        Production Process
                      </h3>
                      <ol className="list-decimal list-inside space-y-2">
                        {solution.content.production?.process?.map((step) => (
                          <li key={step} className="text-gray-600">
                            {step}
                          </li>
                        ))}
                      </ol>
                      <p className="mt-4 text-green-600 font-medium">
                        Capacity: {solution.content.production?.capacity}
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4">
                        Key Applications
                      </h3>
                      <div className="space-y-6">
                        {solution.content.applications?.map((app) => (
                          <div
                            key={app.title}
                            className="bg-white p-4 rounded-lg"
                          >
                            <h4 className="font-medium mb-2">
                              {app.title}
                            </h4>
                            <ul className="list-disc list-inside">
                              {app.items.map((item) => (
                                <li key={item} className="text-gray-600">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Renewable Energy */}
              {solution.title === "Renewable Energy" && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {solution.content.technologies?.map((tech) => (
                      <div
                        key={tech.type}
                        className="bg-green-50 p-6 rounded-xl"
                      >
                        <h3 className="text-xl font-semibold mb-2">
                          {tech.type}
                        </h3>
                        <p className="text-green-600 mb-4">
                          {tech.capacity}
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                          {tech.features.map((feature) => (
                            <li key={feature} className="text-gray-600">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-100 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-2">
                        Annual Impact
                      </h3>
                      <p className="text-2xl font-bold text-green-600">
                        {solution.content.impact?.emissions}
                      </p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-2">
                        Energy Access
                      </h3>
                      <p className="text-2xl font-bold text-green-600">
                        {solution.content.impact?.households}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Cookstoves */}
              {solution.title === "Cookstoves" && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {solution.content.models?.map((model) => (
                        <div
                          key={model.type}
                          className="bg-green-50 p-6 rounded-xl"
                        >
                          <h3 className="text-xl font-semibold mb-2">
                            {model.type}
                          </h3>
                          <p className="text-green-600 mb-3">
                            Efficiency: {model.efficiency}
                          </p>
                          <ul className="list-disc list-inside">
                            {model.features.map((feature) => (
                              <li key={feature} className="text-gray-600">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="bg-green-100 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4">
                        Distribution Network
                      </h3>
                      <div className="space-y-4">
                        <p className="text-2xl font-bold text-green-600">
                          {solution.content.distribution?.units}
                        </p>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-medium mb-2">
                            Key Regions
                          </h4>
                          <ul className="list-disc list-inside">
                            {solution.content.distribution?.regions.map(
                              (region) => (
                                <li key={region} className="text-gray-600">
                                  {region}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Constructed Wetlands */}
              {solution.title === "Constructed Wetlands" && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {solution.content.types?.map((type) => (
                        <div
                          key={type.design}
                          className="bg-green-50 p-6 rounded-xl"
                        >
                          <h3 className="text-xl font-semibold mb-2">
                            {type.design}
                          </h3>
                          <p className="text-green-600 mb-3">
                            {type.application}
                          </p>
                          <ul className="list-disc list-inside">
                            {type.benefits.map((benefit) => (
                              <li key={benefit} className="text-gray-600">
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="bg-green-100 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4">
                        Case Study: {solution.content.caseStudy?.title}
                      </h3>
                      <ul className="list-check list-inside space-y-2">
                        {solution.content.caseStudy?.impact?.map((impact) => (
                          <li key={impact} className="text-gray-600">
                            ✓ {impact}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 p-4 bg-white rounded-lg">
                        <p className="text-sm text-gray-600">
                          Verified by Cercarbono Wetland Methodology v2.1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Cumulative Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "36K+", label: "Hectares Conserved" },
              { value: "2.1M", label: "Tons CO2e Reduced" },
              { value: "120+", label: "Endangered Species Protected" },
              { value: "15K+", label: "Community Members Engaged" }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-green-700 rounded-xl"
              >
                <div className="text-4xl font-bold mb-2">
                  {metric.value}
                </div>
                <div className="text-lg">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
