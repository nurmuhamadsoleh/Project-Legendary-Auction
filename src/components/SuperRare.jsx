import React from "react";
import Card from "./Card";
import "../sass/sections/superRare.scss"

import super1 from "../assets/img1.png";
import super2 from "../assets/img2.png";
import super3 from "../assets/img3.png";
import super4 from "../assets/img4.png";
import super5 from "../assets/img5.png";
import super6 from "../assets/img6.png";

export default function SuperRare() {
  const data = [
    {
      image: super3,
    },
    {
      image: super2,
    },
    {
      image: super1,
    },
    {
      image: super6,
    },
    {
      image: super5,
    },
    {
      image: super4,
    },
  ];

  return (
    <div className="cards">
      <div className="cards__image">
        {data.map(({ image}, index) => (
          <Card
            image={image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
