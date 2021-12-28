import React from "react";
import "../CSS/socialblock.css";

const SocialBlock = () => {
  return (
    <div className="block">
      <div className="block-cont">
        <div className="block-left">
          <h1>Subscribe!</h1>
          <p>Please join us in our next trek </p>
        </div>
        <div className="block-right">
          <form>
            <input
              type="Email"
              placeholder="Enter your email to join us"
              className="text-input"
            />
            <input type="button" value="Join" className="btn-input" />
          </form>
        </div>
      </div>
      <div className="block2-cont">
        <div className="block-left">
          <h1>My Blogs!</h1>
          <p>You can read more about them here. </p>
        </div>
        <div className="block2-right">
          <button className="block2-right-btn">Free One</button>
          <button className="block2-right-btn">Request More</button>
        </div>
      </div>
    </div>
  );
};

export default SocialBlock;
