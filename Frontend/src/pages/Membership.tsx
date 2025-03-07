// import React from "react";
// import { motion } from "framer-motion";
// import { FiDollarSign, FiCalendar, FiGift, FiLock, FiCheck, FiShare2 } from "react-icons/fi";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Membership = () => {
//   const donationTiers = [
//     { amount: 25, impact: "Support organic farming transition for 1 grower" },
//     { amount: 50, impact: "Protect habitat for migratory warblers" },
//     { amount: 100, impact: "Secure puma home range conservation" },
//     { amount: 500, impact: "Expand Andean spectacled bear habitat" }
//   ];

//   const plannedGivingOptions = [
//     {
//       type: "Bequests",
//       description: "Include Ecotropics in your will or trust",
//       benefit: "Reduce estate taxes while supporting legacy conservation"
//     },
//     {
//       type: "Charitable Trusts",
//       description: "CRTs and CLTs providing income streams",
//       benefit: "Avoid capital gains tax + income tax deduction"
//     },
//     {
//       type: "Retirement Assets",
//       description: "Designate as beneficiary of IRA/401(k)",
//       benefit: "Avoid income and estate taxes on retirement funds"
//     },
//     {
//       type: "Life Insurance",
//       description: "Donate existing or new policy",
//       benefit: "Receive current income tax deduction"
//     }
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
//             Invest in Earth's Future
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Your support enables climate-resilient solutions across tropical ecosystems
//           </p>
//         </div>
//       </motion.section>

//       {/* Donate Now Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Make an Impact</h2>
          
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
//           >
//             {donationTiers.map((tier, index) => (
//               <div key={tier.amount} className="bg-green-50 p-6 rounded-xl border border-green-100">
//                 <div className="flex items-center mb-4">
//                   <FiDollarSign className="w-6 h-6 text-green-600 mr-2" />
//                   <span className="text-2xl font-bold">${tier.amount}</span>
//                 </div>
//                 <p className="text-gray-600 mb-4">{tier.impact}</p>
//                 <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
//                   Donate ${tier.amount}
//                 </button>
//               </div>
//             ))}
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="bg-green-600 text-white p-8 rounded-xl">
//               <h3 className="text-2xl font-bold mb-6">Tax Benefits</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-center">
//                   <FiLock className="w-5 h-5 mr-3" />
//                   501(c)(3) Tax Deductible Donations
//                 </li>
//                 <li className="flex items-center">
//                   <FiCheck className="w-5 h-5 mr-3" />
//                   EIN: 38-3751536
//                 </li>
//                 <li className="flex items-center">
//                   <FiCalendar className="w-5 h-5 mr-3" />
//                   Annual Receipts Provided
//                 </li>
//               </ul>
//             </div>

//             <div className="space-y-8">
//               <div>
//                 <h3 className="text-2xl font-semibold mb-4">Other Ways to Give</h3>
//                 <ul className="list-disc list-inside space-y-2 text-gray-600">
//                   <li>Stock Transfers (DTCC #0158)</li>
//                   <li>Cryptocurrency Donations</li>
//                   <li>Donor-Advised Funds</li>
//                   <li>Corporate Matching</li>
//                 </ul>
//               </div>
//               <div className="bg-green-50 p-6 rounded-xl">
//                 <p className="text-sm text-gray-600">
//                   All donations processed securely through PCI-compliant systems
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Monthly Giving */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Sustaining Support</h2>
          
//           <div className="grid md:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ x: -50 }}
//               whileInView={{ x: 0 }}
//               className="bg-white p-8 rounded-xl shadow-lg"
//             >
//               <div className="flex items-center mb-6">
//                 <FiCalendar className="w-8 h-8 text-green-600 mr-4" />
//                 <h3 className="text-2xl font-semibold">Monthly Impact</h3>
//               </div>
//               <ul className="list-check list-inside space-y-4">
//                 <li>Predictable funding for long-term projects</li>
//                 <li>Lower processing fees (2.2% vs 3.5%)</li>
//                 <li>Flexible amount adjustments</li>
//                 <li>Annual tax summary statements</li>
//               </ul>
//             </motion.div>

//             <div className="space-y-8">
//               <div className="bg-green-600 text-white p-8 rounded-xl">
//                 <h3 className="text-2xl font-bold mb-4">Benefits Include</h3>
//                 <ul className="space-y-4">
//                   <li className="flex items-center">
//                     <FiShare2 className="w-5 h-5 mr-3" />
//                     Exclusive project updates
//                   </li>
//                   <li className="flex items-center">
//                     <FiGift className="w-5 h-5 mr-3" />
//                     VIP event invitations
//                   </li>
//                   <li className="flex items-center">
//                     <FiCheck className="w-5 h-5 mr-3" />
//                     Priority customer support
//                   </li>
//                 </ul>
//               </div>
//               <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
//                 Start Monthly Giving
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Estate Planning */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Legacy Giving</h2>
          
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               {plannedGivingOptions.map((option, index) => (
//                 <motion.div
//                   key={option.type}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="bg-green-50 p-6 rounded-xl"
//                 >
//                   <h3 className="text-xl font-semibold mb-2">{option.type}</h3>
//                   <p className="text-gray-600 mb-2">{option.description}</p>
//                   <div className="flex items-center text-green-600">
//                     <FiCheck className="mr-2" />
//                     {option.benefit}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="bg-green-600 text-white p-8 rounded-xl">
//               <h3 className="text-2xl font-bold mb-6">Why Planned Giving?</h3>
//               <ul className="list-disc list-inside space-y-4">
//                 <li>Maintain control of assets during lifetime</li>
//                 <li>Potential for increased income</li>
//                 <li>Reduce/eliminate capital gains tax</li>
//                 <li>Create lasting environmental legacy</li>
//               </ul>
//               <div className="mt-8 bg-green-700 p-6 rounded-lg">
//                 <h4 className="text-lg font-semibold mb-2">Next Steps</h4>
//                 <p className="mb-4">Contact our giving specialists:</p>
//                 <a
//                   href="mailto:plannedgiving@ecotropics.org"
//                   className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg hover:bg-green-50"
//                 >
//                   Email Us
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Membership;

import React from "react";
import { motion } from "framer-motion";
import { FiDollarSign, FiCalendar, FiGift, FiLock, FiCheck, FiShare2 } from "react-icons/fi";

const donationTiers = [
  { amount: 25, impact: "Support organic farming transition for 1 grower" },
  { amount: 50, impact: "Protect habitat for migratory warblers" },
  { amount: 100, impact: "Secure puma home range conservation" },
  { amount: 500, impact: "Expand Andean spectacled bear habitat" }
];

const plannedGivingOptions = [
  {
    type: "Bequests",
    description: "Include Ecotropics in your will or trust",
    benefit: "Reduce estate taxes while supporting legacy conservation"
  },
  {
    type: "Charitable Trusts",
    description: "CRTs and CLTs providing income streams",
    benefit: "Avoid capital gains tax + income tax deduction"
  },
  {
    type: "Retirement Assets",
    description: "Designate as beneficiary of IRA/401(k)",
    benefit: "Avoid income and estate taxes on retirement funds"
  },
  {
    type: "Life Insurance",
    description: "Donate existing or new policy",
    benefit: "Receive current income tax deduction"
  }
];

const Membership = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
            alt="Forest background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Invest in Earth's Future
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Your support enables climate-resilient solutions across tropical ecosystems
          </motion.p>
        </div>
      </motion.section>

      {/* Donate Now Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Make an Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your level of impact and join us in protecting our planet's future
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {donationTiers.map((tier, index) => (
              <motion.div
                key={tier.amount}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-green-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <FiDollarSign className="w-6 h-6 text-green-600 mr-2" />
                  <span className="text-2xl font-bold">${tier.amount}</span>
                </div>
                <p className="text-gray-600 mb-4">{tier.impact}</p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Donate ${tier.amount}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-600 text-white p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Tax Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FiLock className="w-5 h-5 mr-3" />
                  501(c)(3) Tax Deductible Donations
                </li>
                <li className="flex items-center">
                  <FiCheck className="w-5 h-5 mr-3" />
                  EIN: 38-3751536
                </li>
                <li className="flex items-center">
                  <FiCalendar className="w-5 h-5 mr-3" />
                  Annual Receipts Provided
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">Other Ways to Give</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Stock Transfers (DTCC #0158)</li>
                  <li>Cryptocurrency Donations</li>
                  <li>Donor-Advised Funds</li>
                  <li>Corporate Matching</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <p className="text-sm text-gray-600">
                  All donations processed securely through PCI-compliant systems
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Monthly Giving */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sustaining Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our community of monthly donors and make a lasting impact
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <FiCalendar className="w-8 h-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-semibold">Monthly Impact</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FiCheck className="w-5 h-5 text-green-600 mr-3" />
                  Predictable funding for long-term projects
                </li>
                <li className="flex items-center">
                  <FiCheck className="w-5 h-5 text-green-600 mr-3" />
                  Lower processing fees (2.2% vs 3.5%)
                </li>
                <li className="flex items-center">
                  <FiCheck className="w-5 h-5 text-green-600 mr-3" />
                  Flexible amount adjustments
                </li>
                <li className="flex items-center">
                  <FiCheck className="w-5 h-5 text-green-600 mr-3" />
                  Annual tax summary statements
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-green-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Benefits Include</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <FiShare2 className="w-5 h-5 mr-3" />
                    Exclusive project updates
                  </li>
                  <li className="flex items-center">
                    <FiGift className="w-5 h-5 mr-3" />
                    VIP event invitations
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="w-5 h-5 mr-3" />
                    Priority customer support
                  </li>
                </ul>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Start Monthly Giving
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estate Planning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legacy Giving</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create a lasting impact through planned giving options
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {plannedGivingOptions.map((option, index) => (
                <motion.div
                  key={option.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-green-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{option.type}</h3>
                  <p className="text-gray-600 mb-2">{option.description}</p>
                  <div className="flex items-center text-green-600">
                    <FiCheck className="mr-2" />
                    {option.benefit}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-600 text-white p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Why Planned Giving?</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FiCheck className="w-5 h-5 mr-3" />
                  Maintain control of assets during lifetime
                </li>
                <li className="flex items-center">
                  <FiCheck className="w-5 h-5 mr-3" />
                  Potential for increased income
                </li>
                <li className="flex items-center">
                  <FiCheck className="w-5 h-5 mr-3" />
                  Reduce/eliminate capital gains tax
                </li>
                <li className="flex items-center">
                  <FiCheck className="w-5 h-5 mr-3" />
                  Create lasting environmental legacy
                </li>
              </ul>
              <div className="mt-8 bg-green-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Next Steps</h4>
                <p className="mb-4">Contact our giving specialists:</p>
                <a
                  href="mailto:plannedgiving@ecotropics.org"
                  className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;