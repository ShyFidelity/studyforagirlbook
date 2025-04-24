import React, { useState } from "react";
import "./index.css";
import CollagePage from "./components/main";
import AboutPage from "./components/about.js";
import ContactPage from "./components/contact.js";
import ShopPage from "./components/shop.js";

const navItems = [
  { label: "Home", key: "home" },
  { label: "About", key: "about" },
  { label: "Contact", key: "contact" },
  { label: "Shop", key: "shop" },
];

export default function App() {
  const [activePage, setActivePage] = useState("home");

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
        <h1 className="collage-title">DARIA STOLYAROVA</h1>
        <ul className="collage-nav-items">
          {navItems.map((item) => (
            <li
              key={item.key}
              className={`collage-nav-link ${activePage === item.key ? "active" : ""}`}
              onClick={() => setActivePage(item.key)}
            >
              {item.label}
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
