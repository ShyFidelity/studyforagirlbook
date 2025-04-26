import React, { useState, useCallback } from "react";
import "./index.css";
import CollagePage from "./components/main";
import AboutPage from "./components/about.js";
import ContactPage from "./components/contact.js";
import ShopPage from "./components/shop.js";
import Logo from "./assets/gb-logo.png";

const navItems = [
  { label: "Home", key: "home" },
  { label: "About", key: "about" },
  { label: "Contact", key: "contact" },
  { label: "Shop", key: "shop" },
];

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const handleNavClick = useCallback((key) => {
    console.log("Navigating to:", key); // for debugging
    setActivePage(key);
  }, []);

  const renderPageContent = () => {
    switch (activePage) {
      case "home":
        return <CollagePage />;
      case "about":
        return <AboutPage />;
      case "shop":
        return <ShopPage />;
      case "contact":
        return <ContactPage />;
      default:
        return null;
    }
  };

  return (
    <div className="collage-wrapper">
      <nav className="collage-nav">
      <a href="https://studyforagirlbook.substack.com/" className="type-link">read our substack</a>

 <img src={Logo} alt="Logo" className="logo" />
        
        <ul className="collage-nav-items">
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                type="button"
                className={`collage-nav-link ${activePage === item.key ? "active" : ""}`}
                onClick={() => handleNavClick(item.key)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="collage-main">
        {renderPageContent()}
      </main>
    </div>
  );
} 
