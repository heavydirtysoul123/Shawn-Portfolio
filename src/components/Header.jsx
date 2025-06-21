import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../pages/pages.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
<header className="header">
  <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
    <h1 className="logo">My Portfolio</h1>

    <div className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <nav className={`nav ${isOpen ? "open" : ""}`}>
    <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</NavLink>
    <NavLink to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</NavLink>
    <NavLink to="/portfolio" className="nav-link" onClick={() => setIsOpen(false)}>Portfolio</NavLink>
    <NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</NavLink>
  </nav>
</header>

  );
}
