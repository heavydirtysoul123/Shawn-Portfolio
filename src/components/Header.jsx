import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../pages/pages.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header-container">
      <div className="header-inner">
        <h1 className="logo">Dev <span>Shawn</span></h1>

        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </div>

        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
          <NavLink to="/portfolio" className="nav-link" onClick={closeMenu}>Portfolio</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
