import React, { useState } from "react";
import "./carousel.css"; // <- This is the normal CSS we'll add next!

const cards = Array.from({ length: 5 }).map((_, idx) => ({
  id: idx,
  text: "Coming Soon",
}));

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextCard = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="carousel-wrapper">
      <button onClick={prevCard} className="carousel-button">←</button>
      <div className="carousel-card">{cards[current].text}</div>
      <button onClick={nextCard} className="carousel-button">→</button>
    </div>
  );
}
