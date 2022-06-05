import React from "react";
import "../sass/components/card.scss"

export default function Card({ image}) {
  return (
    <div className="card-image">
      <img src={image} alt="super" />
    </div>
  );
}
