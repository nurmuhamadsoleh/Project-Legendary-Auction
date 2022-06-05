import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  const [navState, setNavState] = useState(false);
  const navLink = ()=>{
    const nav = document.querySelector('.brand__menu');
    nav.classList.toggle('slide');
  }
  return (
    <nav>
      <div className="brand">
        <div className="brand__container">
          <h6>Plague Social Creatures</h6>
        </div>
        <ul className="brand__menu">
          <li className="menu_items">
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
              <span>A</span>bout
            </Link>
          </li>
          <li className="menu_items">
            <Link to="/like" style={{textDecoration: 'none', color: 'white'}}>
            <span>R</span>oad map
            </Link>
          </li>
          <li className="menu_items">
            <Link to="/free" style={{textDecoration: 'none', color: 'white'}}>
            <span>L</span>egen<span>A</span>dary<span>A</span>uction
            </Link>
          </li>
          <li className="menu_items">
            <Link to="/signup" style={{textDecoration: 'none', color: 'white'}}>
              <span>F</span>aq
            </Link>
          </li>
        </ul>
        <div class="menutoggle">
          <input type="checkbox" onClick={navLink}/>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="line">
        <div className="line__center"></div>
      </div>
      
        {/* <div className="toggle-container">
          {/* <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (

              // <GiHamburgerMenu onClick={() => setNavState(false)} />
            )}
          </div> */}

          {/* <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div> */}
        {/* </div> */} 

      {/* <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div> */}
    </nav>
  );
}
