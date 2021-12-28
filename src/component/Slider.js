import React from "react";
import { Thirdblock } from "./DataComp";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "../CSS/slider.css";

import { useState, useEffect } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = Thirdblock.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, Thirdblock]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="slider">
      <h1>My View Places</h1>
      <div className="slider-cont">
        {Thirdblock.map((block, Index) => {
          const { img, title, para, btntxt } = block;
          let position = "nextSlide";
          if (Index === index) {
            position = "activeSlide";
          }
          if (
            Index === index - 1 ||
            (index === 0 && Index === Thirdblock.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={Index}>
              <img src={img} alt="m" className="slide-img" />
              <h1>{title}</h1>
              <p>{para}</p>
              <button>{btntxt}</button>
            </article>
          );
        })}
      </div>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Slider;
