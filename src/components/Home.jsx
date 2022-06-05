import React from "react";
import "../sass/sections/home.scss"
import hero from "../assets/animate.png";

export default function Home() {
  return (
    <div className="content">
      <div className="content__header">
        <p className="content__header--title">Plague social creatures</p>
        <p className="content__header--description">
        Plague Social Creatures are 3000 unique collections of humans, allowing staking for daily rewards of our utility token   PSC. we took this theme because our artist was inspired by the plague that is currently ruling the world, this plague is fucking shit. 
        </p>
      </div>
      <div className="content__image">
        <img src={hero} alt="Home" />
      </div>
    </div>
  );
}
