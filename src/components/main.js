import React from "react";
const navItems = ["Home", "About", "Portfolio", "Journal", "Contact"];

const images = [
  {
    src: "https://source.unsplash.com/random/400x500?cooking",
    alt: "Cooking scene",
  },
  {
    src: "https://source.unsplash.com/random/600x400?surfing",
    alt: "Surfers at beach",
  },
  {
    src: "https://source.unsplash.com/random/600x500?bar",
    alt: "Bar scene",
  },
  {
    src: "https://source.unsplash.com/random/500x400?train-view",
    alt: "Train window view",
  },
];

export default function CollagePage() {
  return (
    <div className="collage-wrapper">
      <nav className="collage-nav">
        <h1 className="collage-title">DARIA STOLYAROVA</h1>
        <ul className="collage-nav-items">
          {navItems.map((item) => (
            <li key={item} className="collage-nav-link">
              {item}
            </li>
          ))}
        </ul>
      </nav>

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
