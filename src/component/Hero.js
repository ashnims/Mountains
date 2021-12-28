import React from "react";
import one from "../Photos/pngaaa.com-1626236.svg";
import "../CSS/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-cont">
        <div className="text">
          <h1 className="text1">WHY DO I LOVE MOUNTAINS</h1>
          <p className="text2">
            The treacherous windings of treks, the struggle for basics in life,
            the sheer pleasure of having Maggi and adrak walli chai on top of a
            mountain, the sweet symphony of wind, the chirping of the birds, the
            steep dives of valleys, the moodiness of clouds, the dew like
            freshness of air that purifies even the impure, everything has a
            message for you. In that emptiness, you can completely lose yourself
            to find a new you. That’s why these small little breaks are so
            important for my survival. When the world and its selfishness gets
            too much to handle I take shelter in mountains.
          </p>
          <button className="hero-btn" type="button">
            Read More
          </button>
        </div>
        <div className="img-cont">
          <img src={one} alt="mountain man" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
