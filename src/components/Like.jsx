import React from "react";
import "../sass/sections/like.scss";

// import team from "../assets/image.png";

export default function Like() {
  return (
    <div className="like" style={{padding: '5px 0 30px 0'}}>
      <div className="like__one">
        <h1 style={{textAlign: 'center'}}>ROADMAP</h1>
        <h4 style={{textAlign: 'center'}}>Phase 1</h4>
        <p>Public sale open for everyone * Release PlagueSocialCreatures collection on secondary marketplace MAGICEDEN, etc * Release rarity to Moonrank.</p>
      </div>
      <div className="like__two">
        <h1 style={{textAlign: 'center'}}>ROADMAP</h1>
        <h4 style={{textAlign: 'center'}}>Phase 2</h4>
        <p>We will do a reveal the psc collections after sold out * Create PSC DAO for PSC holders * PSC token release The holders will get weekly PSC token airdrop * 25% of the funds from sales will go to wards the " PSC token " * 25% of the funds from sales will go to wards the " community DAO " we will do sweep floor, giveaway for PSC holders, and another events * We will give 50%  royalties from secondary market to " community DAO   we will give this funds to our holders so the community will have the right to choose what this fund is for".</p>
      </div>
      <div className="like__three">
        <h1 style={{textAlign: 'center'}}>ROADMAP</h1>
        <h4 style={{textAlign: 'center'}}>Phase 3</h4>
        <p>* Open staking for PSC collections * We will release 5 Legendary collections for auction auctions for legendary can be purchased using PSC token * We will create exclusive Merchandise for PSC Holders * Roadmap v2 is coming soon.</p>
      </div>
    </div>
  );
}
