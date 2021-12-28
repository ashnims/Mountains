import React from "react";
import { Link } from "react-router-dom";
import Mountain from "../Photos/mountain.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../CSS/navbar.css";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!false);
  };
  const closeMenu = () => {
    setClick(false);
  };
  const showTab = () => {
    if (window.innerWidth <= 500) {
      setClick(false);
    } else {
      setClick(!false);
    }
  };
  window.addEventListener("resize", showTab);

  return (
    <section className="navbar">
      <Link to="/home" className="logo-cont">
        <img src={Mountain} alt="Mountain" className="logo" />
        <h1>Mountains</h1>
      </Link>
      <ul className={click ? "list-cont" : "hide-cont"}>
        <li className="list">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="list">
          <Link to="/main2" className="link">
            About
          </Link>
        </li>
        <li className="list">
          <Link to="/slider" className="link">
            Feature
          </Link>
        </li>
      </ul>
      <Link to="/">
        <button type="submit" className="btn">
          Contact US <BsFillArrowRightCircleFill className="arrow" />
        </button>
      </Link>
      <div className="menu-icons">
        {click ? (
          <FaTimes onClick={closeMenu} />
        ) : (
          <FaBars onClick={handleClick} />
        )}
      </div>
    </section>
  );
};

export default Navbar;
