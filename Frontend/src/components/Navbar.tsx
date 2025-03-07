import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Leaf } from 'lucide-react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { scrollY } = useScroll();
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
    },
    {
      name: "Contact",
      path: "/contact",
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50"
      style={{
        y: scrollY.get() > 100 ? -20 : 0,
        opacity: scrollY.get() > 100 ? 0.9 : 1,
      }}
      animate={{ 
        backgroundColor: scrollY.get()> 100 ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.9)',
        borderBottom: scrollY.get() > 100 ? '1px solid #e5e7eb' : '1px solid transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            {/* <motion.img 
              src="/logo.png" 
              alt="Ecotropics" 
              className="h-16"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            /> */}
            <Leaf className='text-3xl w-12 h-12 text-green-700' />
            <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Ecotropics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <motion.div 
                key={link.name} 
                className="relative group"
                onHoverStart={() => setOpenSubmenu(link.name)}
                onHoverEnd={() => setOpenSubmenu(null)}
              >
                <div className="flex items-center space-x-1">
                  <NavLink
                    to={link.path}
                    className={`px-3 py-2 text-sm font-medium relative ${
                      isActive(link.path) 
                        ? 'text-green-600'
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <motion.div 
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600"
                            layoutId="activeIndicator"
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                  {link.subpages && (
                    <FiChevronDown className={`w-4 h-4 transition-transform ${
                      openSubmenu === link.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </div>

                {link.subpages && (
                  <AnimatePresence>
                    {openSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 bg-white shadow-xl rounded-lg p-2 min-w-[220px] border border-gray-100"
                      >
                        {link.subpages.map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            className={({ isActive }) => 
                              `block px-4 py-2.5 text-sm rounded-md transition-all ${
                                isActive
                                  ? 'bg-green-100 text-green-700'
                                  : 'text-gray-600 hover:bg-gray-50 hover:pl-5'
                              }`
                            }
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-green-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-1">
                  <div className="flex flex-col">
                    <NavLink
                      to={link.path}
                      onClick={() => !link.subpages && setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3 py-2.5 text-base rounded-lg ${
                          isActive 
                            ? 'bg-green-50 text-green-700' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`
                      }
                    >
                      {link.name}
                      {link.subpages && (
                        <FiChevronDown
                          className={`transform transition-transform ${
                            openSubmenu === link.name ? 'rotate-180' : ''
                          }`}
                          onClick={() => setOpenSubmenu(
                            openSubmenu === link.name ? null : link.name
                          )}
                        />
                      )}
                    </NavLink>
                    {link.subpages && openSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pl-4 space-y-1"
                      >
                        {link.subpages.map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block pl-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 hover:pl-6 transition-all"
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </div>
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