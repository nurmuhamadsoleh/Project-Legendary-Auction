import React from "react";
import "../sass/sections/free.scss"
import Hero from "../assets/img6.png"
import Card from "./Card";
import "../sass/sections/superRare.scss"

import super1 from "../assets/img1.png";
import super2 from "../assets/img2.png";
import super3 from "../assets/img3.png";
import super4 from "../assets/img4.png";
import super5 from "../assets/img5.png";
import super6 from "../assets/img6.png";

export default function Free() {
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
    <div className="contain">
      <div className="contain__image">
        <img src={Hero} alt="Hero" />
      </div>
      <div className="contain__header">
        <h1 style={{textAlign: 'center', color: 'white'}}>LEGENDARY AUCTION COMING SOON</h1>
      </div>
      <div className="contain__cards">
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
