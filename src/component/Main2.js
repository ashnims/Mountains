import React from "react";
import m7 from "../Photos/m7.jpg";

import "../CSS/main2.css";

const Main2 = () => {
  return (
    <section className="main2">
      <div className="main2-cont">
        <div className="main2-text">
          <h1>My Best Movement</h1>
          <p>
            Journey to the mountains is always a belief! A belief beyond a
            shadow of an underdog’s achievement towards glory! A hope, a dream
            and an experience that we take upon ourselves to feel that
            exhilarating madness that you derive after you climb the peak and
            reach the top! Just around this time of the year, I have a strong
            urge to go back to these magical, mystical divine creation of
            nature!
          </p>
          <button className="main2-btn"> Know More</button>
        </div>
        <div className="main2-right">
          <img src={m7} alt="moment" className="main2-img" />
        </div>
      </div>
    </section>
  );
};

export default Main2;
