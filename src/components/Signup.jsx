import React from "react";
import "../sass/sections/signup.scss"

export default function Signup() {
  return (
    <div className="signup">
      <div className="headline">
        <h1 className="title">FAQ</h1>
      </div>
      <br />
      <div className="accordion data" id="accordionExample">
        <div className="accordion-item bg-black">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              <p className="fw-bold" style={{fontSize: '28px'}}>Witch network do we use to launch PSC collections ?</p>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
            <div className="accordion-body text-danger">
              <strong>SOLANA</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-black">
          <h2 class="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <p className="fw-bold" style={{fontSize: '28px'}}>Witch wallet can be used for minting ?</p>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#ffffffordionExample">
            <div class="accordion-body text-danger">
              <strong >We recommend you to use phantom wallet, but you can also use sollet or solfare wallet</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-black">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <p className=" fw-bold" style={{fontSize: '28px'}}>How much total supply of PSC collection</p>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#ffffffordionExample">
            <div class="accordion-body text-danger">
              <strong>We have 3000 total supply 1000 for whitelist and 2000 for public sale </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-black">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
              <p className="fw-bold" style={{fontSize: '28px'}}>When mint ?</p>
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#ffffffordionExample">
            <div class="accordion-body text-light">
              <strong>We haven't set an exact date yet, but we will launch the PSC collection in the middle of March or the end of March </strong><span className="text-danger fw-bold">1000 for whitelist and 2000 for public sale </span>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-black">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
              <p className="fw-bold" style={{fontSize: '28px'}}>Do we have rarity system for PSC collection ?</p>
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#ffffffordionExample">
            <div class="accordion-body text-light">
              <strong>Yes,</strong><span className="text-danger fw-bold">we will update rarity system for PSC collections once they are all minted</span>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-black">
          <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              <p className="fw-bold" style={{fontSize: '28px'}}>What secondary market will the PSC collections be released ?</p>
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#ffffffordionExample">
            <div class="accordion-body text-light">
              <strong>We have a target that Magiceden is our first goal and there are others</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
