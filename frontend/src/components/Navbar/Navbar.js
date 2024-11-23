import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/zamsof.jpg';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarDark, setNavbarDark] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 570) {
        setNavbarDark(true);
      } else {
        setNavbarDark(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`nav-container ${navbarDark ? 'dark' : ''}`}>
      {/* Logo */}
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" exact activeClassName="active" onClick={toggleMenu}>
              Home <span className="uleffect"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" onClick={toggleMenu}>
              About Us <span className="uleffect"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName="active" onClick={toggleMenu}>
              News <span className="uleffect"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={toggleMenu}>
              Contact <span className="uleffect"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/thematic" activeClassName="active" onClick={toggleMenu}>
              Thematic <span className="uleffect"></span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Navbar;
