import React, { useState } from "react";
import { motion } from "framer-motion";
import "./main.css"; // Adjust the path as necessary
import Carousel from "../components/Carousel"; // Adjust the path as necessary


import CigGirl from "../assets/girl-w-cig.png";
import LipsDrawing from "../assets/lips-drawing.png";
import VelvetHand from "../assets/velvet-hand.png";
import Logo from "../assets/sgb-pink.svg";
import Cheetah from "../assets/cheetah.png";
import Lips from "../assets/lips.png";
import Cunt from "../assets/cunty.gif";
import Trashy from "../assets/trashy.jpg";
import Swan from "../assets/swan.jpg";
import CigLady from "../assets/cig-lady.gif";
import Hearts from "../assets/hearts.svg";
import JagWalk from "../assets/jag-walk.gif";
import Search from "../assets/search-narrow.gif";
import PinkBook from "../assets/sophie-calle-take-care-of-yourself.png";
import FlowersInHand from "../assets/flowers-in-hand.jpg";
import Grapes from "../assets/grapes.jpg";
import GirlReading from "../assets/girl-reading.jpg";
import Cunt2 from "../assets/cunt-sparkle.png";
import Gurlz from "../assets/gurlz.jpg";
import Bambi from "../assets/bambi.gif";

const navItems = ["Home", "About", "Portfolio", "Journal", "Contact"];

const images = [
  { src: CigGirl, alt: "Cooking scene" },
  { src: Grapes, alt: "lipsdrawing" },
  { src: Lips, alt: "Train window view" },
  { src: PinkBook, alt: "Bar scene" },
  { src: Cheetah, alt: "Train window view" },
  { src: Bambi, alt: "Train window view" },
  { src: Hearts, alt: "lipsdrawing" },
  { src: Swan, alt: "lipsdrawing" },
  { src: JagWalk, alt: "lipsdrawing" },
  { src: Search, alt: "lipsdrawing" },
  { src: FlowersInHand, alt: "lipsdrawing" },
  { src: LipsDrawing, alt: "lipsdrawing" },
  { src: Cunt2, alt: "lipsdrawing" },
  { src: GirlReading, alt: "lipsdrawing" },
];

// carousel cards
const carouselCards = Array.from({ length: 5 }).map((_, idx) => ({
  id: idx,
  text: "Coming Soon",
}));

export default function CollagePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselCards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="collage-wrapper">
      <div className="collage-header">
        <nav className="collage-nav">
          {navItems.map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`} className="nav-item">
              {item}
            </a>
          ))}
        </nav>
      </div>

      <main className="collage-main gradient">
        <section className="collage-grid">
          {images.map((img, i) => (
            <div key={i} className={`collage-item collage-item-${i}`}>
              <img src={img.src} alt={img.alt} className="collage-image" />
            </div>
          ))}
        </section>

        <section className="collage-text-block">
          <p>It’s fun, it’s flirty, it’s deeply thoughtful but never takes itself too seriously.</p>
        </section>

        <section className="collage-footer">
          {/* --- Carousel starts here --- */}
          <div>
      <Carousel />
    </div>
          {/* --- Carousel ends here --- */}
        </section>
      </main>
    </div>
  );
}
