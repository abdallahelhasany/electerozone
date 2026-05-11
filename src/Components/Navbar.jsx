import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function AllNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const { getTotalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div>
      <header className="glass">
        <nav>
          <Link to="/" className="logo">
            Electero Zone
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/" className={isActive("/")}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={isActive("/about")}>About</Link>
            </li>
            <li>
              <Link to="/services" className={isActive("/services")}>Our Services</Link>
            </li>
            <li>
              <Link to="/projects" className={isActive("/projects")}>Our Projects</Link>
            </li>
            <li>
              <Link to="/contact" className={isActive("/contact")}>Contact</Link>
            </li>
            <li>
              <a
                href="https://github.com/el7asanyy"
                target="_blank"
                className="external-link"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </li>
          </ul>
          <Link to="/cart" className="cart-btn" title="Shopping Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </Link>
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={
              theme === "dark"
                ? "Switch to Light Theme"
                : "Switch to Dark Theme"
            }
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          <div
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>
        </nav>
        <div className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMobileMenu} className={isActive("/")}>
            Home
          </Link>
          <Link to="/about" onClick={closeMobileMenu} className={isActive("/about")}>
            About
          </Link>
          <Link to="/services" onClick={closeMobileMenu} className={isActive("/services")}>
            Our Services
          </Link>
          <Link to="/projects" onClick={closeMobileMenu} className={isActive("/projects")}>
            Our Projects
          </Link>
          <Link to="/contact" onClick={closeMobileMenu} className={isActive("/contact")}>
            Contact
          </Link>
          <a
            href="https://github.com/el7asanyy"
            target="_blank"
            className="external-link"
            rel="noreferrer noopener"
            onClick={closeMobileMenu}
          >
            GitHub
          </a>
          <button
            className="theme-toggle-btn mobile-theme-btn"
            onClick={() => {
              toggleTheme();
              closeMobileMenu();
            }}
            aria-label="Toggle theme"
            title={
              theme === "dark"
                ? "Switch to Light Theme"
                : "Switch to Dark Theme"
            }
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
            <span style={{ marginLeft: "10px" }}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default AllNavbar;
