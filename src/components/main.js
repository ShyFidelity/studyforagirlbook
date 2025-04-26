import React from "react";
import CigGirl from "../assets/girl-w-cig.png";
import LipsDrawing from "../assets/lips-drawing.png";
import VelvetHand from "../assets/velvet-hand.png";
import Logo from "../assets/sgb-pink.svg";
import Cheetah from "../assets/cheetah.png";
import Lips from "../assets/lips.png";
import Cunt from "../assets/cunty.gif";
import Trashy from "../assets/trashy.jpg"
import Swan from "../assets/swan.jpg"
import CigLady from "../assets/cig-lady.gif"
import Hearts from "../assets/hearts.svg";
import JagWalk from "../assets/jag-walk.gif"
import Search from "../assets/search-narrow.gif"

const navItems = ["Home", "About", "Portfolio", "Journal", "Contact"];

const images = [

  {
    src: CigGirl,
    alt: "Cooking scene",
  },
  {
    src: LipsDrawing,
    alt: "lipsdrawing",
  },
  {
    src: Lips,
    alt: "Train window view",
  },
  {
    src: CigLady,
    alt: "Bar scene",
  },
  {
    src: Cheetah,
    alt: "Train window view",
  },
  {
    src: Trashy,
    alt: "Train window view",
  },
    {
    src: Hearts,
    alt: "lipsdrawing",
  },
  {
    src: Swan,
    alt: "lipsdrawing",
  },
  {
    src: JagWalk,
    alt: "lipsdrawing",
  },
  {
    src: Search,
    alt: "lipsdrawing",
  }, 

];

export default function CollagePage() {
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
      <main className="collage-main">
        <section className="collage-intro">
          <p>
            is a film photographer based in Bournemouth & this is her website
            portfolio.
          </p>
        </section>

        <section className="collage-grid">
  {images.map((img, i) => (
    <div key={i} className={`collage-item collage-item-${i}`}>
      <img src={img.src} alt={img.alt} className="collage-image" />
    </div>
  ))}

        </section>

        <section className="collage-text-block">
          <p>
            Scribbles, textures, and spontaneity form the spirit of the work.
            Each frame is a moment caught in quiet observation.
          </p>
        </section>

        <section className="collage-footer">
          <p>More work coming soon...</p>
        </section>
      </main>
    </div>
  );
}
