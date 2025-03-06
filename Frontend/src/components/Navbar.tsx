// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, Leaf } from 'lucide-react';

// const navigation = [
//   {
//     name: 'What We Do',
//     href: '/what-we-do',
//     submenu: [
//       { name: 'Nature Based Solutions', href: '/what-we-do/nature-solutions' },
//       { name: 'REDD+', href: '/what-we-do/redd-plus' },
//       { name: 'ARR', href: '/what-we-do/arr' },
//       { name: 'Biochar', href: '/what-we-do/biochar' },
//       { name: 'Renewable Energy', href: '/what-we-do/renewable-energy' },
//       { name: 'Cookstoves', href: '/what-we-do/cookstoves' },
//       { name: 'Constructed Wetlands', href: '/what-we-do/wetlands' },
//     ],
//   },
//   {
//     name: 'About Us',
//     href: '/about-us',
//     submenu: [
//       { name: 'Our People', href: '/about-us/our-people' },
//       { name: 'Our History', href: '/about-us/history' },
//       { name: 'Where We Work', href: '/about-us/locations' },
//     ],
//   },
//   {
//     name: 'Get Involved',
//     href: '/get-involved',
//     submenu: [
//       { name: 'Volunteer', href: '/get-involved/volunteer' },
//       { name: 'Careers', href: '/get-involved/careers' },
//       { name: 'WCSF', href: '/get-involved/wcsf' },
//       { name: 'News', href: '/get-involved/news' },
//     ],
//   },
//   {
//     name: 'Membership',
//     href: '/membership',
//     submenu: [
//       { name: 'Donate Now', href: '/membership/donate' },
//       { name: 'Give Monthly', href: '/membership/monthly' },
//       { name: 'Gift Planning', href: '/membership/gift-planning' },
//     ],
//   },
// ];

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

//   return (
//     <header className="bg-white shadow-md">
//       <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
//         <div className="flex h-16 items-center justify-between">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center text-green-600">
//               <Leaf className="h-8 w-8" />
//               <span className="ml-2 text-xl font-bold">EcoAction</span>
//             </Link>
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex md:items-center md:space-x-6">
//             {navigation.map((item) => (
//               <div
//                 key={item.name}
//                 className="relative group"
//                 onMouseEnter={() => setActiveSubmenu(item.name)}
//                 onMouseLeave={() => setActiveSubmenu(null)}
//               >
//                 <Link
//                   to={item.href}
//                   className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
//                 >
//                   {item.name}
//                 </Link>
//                 {item.submenu && activeSubmenu === item.name && (
//                   <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
//                     <div className="py-1">
//                       {item.submenu.map((subitem) => (
//                         <Link
//                           key={subitem.name}
//                           to={subitem.href}
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         >
//                           {subitem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="flex md:hidden">
//             <button
//               type="button"
//               className="text-gray-700 hover:text-green-600"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               <span className="sr-only">Open main menu</span>
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <div key={item.name}>
//                   <Link
//                     to={item.href}
//                     className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600"
//                   >
//                     {item.name}
//                   </Link>
//                   {item.submenu && (
//                     <div className="pl-4">
//                       {item.submenu.map((subitem) => (
//                         <Link
//                           key={subitem.name}
//                           to={subitem.href}
//                           className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
//                         >
//                           {subitem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

// components/Navbar.tsx
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { 
      name: "About", 
      path: "/about",
      subpages: [
        { name: "Our People", path: "/about/our-people" },
        { name: "Our History", path: "/about/our-history" },
        { name: "Where We Work", path: "/about/where-we-work" }
      ]
    },
    { 
      name: "What We Do", 
      path: "/what-we-do",
      subpages: [
        { name: "NBS", path: "/what-we-do/nature-based-solutions" },
        { name: "REDD+", path: "/what-we-do/redd" },
        { name: "ARR", path: "/what-we-do/arr" },
        { name: "Biochar", path: "/what-we-do/biochar" },
        { name: "Energy", path: "/what-we-do/renewable-energy" },
        { name: "Cookstoves", path: "/what-we-do/cookstoves" },
        { name: "Wetlands", path: "/what-we-do/constructed-wetlands" }
      ]
    },
    {
      name: "Get Involved",
      path: "/get-involved",
      subpages: [
        { name: "Volunteer", path: "/get-involved/volunteer" },
        { name: "Careers", path: "/get-involved/careers" },
        { name: "WCSF", path: "/get-involved/wcsf" },
        { name: "News", path: "/get-involved/news" }
      ]
    },
    {
      name: "Support",
      path: "/membership",
      subpages: [
        { name: "Donate", path: "/membership/donate-now" },
        { name: "Monthly", path: "/membership/give-monthly" },
        { name: "Estate Planning", path: "/membership/gift-estate-planning" }
      ]
    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Ecotropics" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <motion.div key={link.name} className="relative group">
                <div className="flex items-center space-x-1">
                  <NavLink
                    to={link.path}
                    className={`px-3 py-2 text-sm font-medium ${
                      isActive(link.path) 
                        ? 'text-green-600 border-b-2 border-green-600'
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {link.name}
                  </NavLink>
                  {link.subpages && <FiChevronDown className="w-4 h-4 text-gray-600" />}
                </div>

                {link.subpages && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg p-4 min-w-[220px]"
                  >
                    {link.subpages.map((sub) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        className={({ isActive }) => 
                          `block px-4 py-2 text-sm ${
                            isActive
                              ? 'bg-green-50 text-green-700'
                              : 'text-gray-700 hover:bg-green-50'
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-green-600"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-2">
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-base font-medium ${
                        isActive ? 'bg-green-50 text-green-700' : 'text-gray-700'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                  {link.subpages?.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block pl-6 pr-3 py-1 text-sm text-gray-600 hover:bg-green-50"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;