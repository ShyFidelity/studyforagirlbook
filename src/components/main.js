import React from "react";
import CigGirl from "../assets/girl-w-cig.png";
import LipsDrawing from "../assets/lips-drawing.png";
import VelvetHand from "../assets/velvet-hand.png";
import Logo from "../assets/sgb-pink.svg";
import Cheetah from "../assets/cheetah.png";


const navItems = ["Home", "About", "Portfolio", "Journal", "Contact"];

const images = [
  {
    src: CigGirl,
    alt: "Cooking scene",
  },
  {
    src: LipsDrawing,
    alt: "Surfers at beach",
  },
  {
    src: VelvetHand,
    alt: "Bar scene",
  },
  {
    src: Cheetah,
    alt: "Train window view",
  },
];

export default function CollagePage() {
  return (
    <div className="collage-wrapper">

      <main className="collage-main">
        <section className="collage-intro">
          <p>
            is a film photographer based in Bournemouth & this is her website portfolio.
          </p>
        </section>

        <section className="collage-grid">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="collage-image"
            />
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
