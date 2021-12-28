import React from "react";
import Two from "../Photos/image2vector.svg";
import "../CSS/main.css";

const Main = () => {
  return (
    <section className="main">
      <div className="main-cont">
        <div className="main-img-cont">
          <img src={Two} alt="mountain" className="main-img" />
        </div>
        <div className="main-text">
          <h1>Do you know they disconnect us to reconnect us</h1>
          <p>
            Spending time out in the mountains really takes things back to
            basics. There is no wifi, no cell service, no social media – money
            doesn't matter out in the woods or up on a mountain top. It’s just
            you and mother nature.This time spent without our devices allows us
            to just be in the moment and recognize the beauty of the little
            things. When was the last time you allowed yourself to let go of
            thoughts centred around emails and work or the “things” you want or
            “tasks” that must get done? We take these little moments all for
            granted personally I found that spending time in the mountains
            reintroduced me to the value of the little things in life and the
            beauty of these tiny moments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
