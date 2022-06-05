import React, {useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./components/Signup";
// import SuperRare from "./components/SuperRare";
import scrollreveal from "scrollreveal";
import CardRelated from "./pages/Jumbotron";
import "./sass/index.scss";

function App() {

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .super-rare,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);

  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);

  return (
    <Router>
      <div className="app-container">
      <ScrollToTop />
        <Navbar/>
        <CardRelated/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/like" element={<Like/>}/>
          <Route path="/free" element={<Free/>}/>
          {/* <Route path="/superRare" element={<SuperRare/>}/> */}
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
