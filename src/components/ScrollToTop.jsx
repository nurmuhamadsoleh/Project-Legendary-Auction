import React, { useState } from "react";
import "../sass/components/scrollToTop.scss";
import { BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  window.addEventListener("scroll", () => {
    window.pageYOffset > 30 ? setVisible(true) : setVisible(false);
  });
  
  return (
    <div className={`scrollToTop ${visible ? "visible" : ""}`}>
      {/* <Link to="/">
        <BsChevronUp />
      </Link> */}
      <a href="#">
        <BsChevronUp />
      </a>
    </div>
  );
}
