import React from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import Mountain from "../Photos/mountain.svg";
import "../CSS/footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-cont">
        <div className="col1">
          <Link to="/" className="footer-logo">
            <img src={Mountain} alt="Mountain" className="f-logo" />
            <h1 className="title">Mountains</h1>
          </Link>
          <ul>
            <li className="f-text">
              <p>
                This is my page i try my best to <br /> create it contact me
                through <br /> this email address <br /> ashnims@123.com
              </p>
            </li>
          </ul>
        </div>
        <div className="col1">
          <h1>About</h1>
          <ul>
            <li>Blogs</li>
            <li>Profile</li>
            <li>Updates</li>
          </ul>
        </div>
        <div className="col1">
          <h1>Help</h1>
          <ul>
            <li>Guide</li>
            <li>Support</li>
            <li>Report</li>
          </ul>
        </div>
        <div className="col1">
          <h1>Social Media</h1>
          <ul className="social">
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsWhatsapp />
            </li>
          </ul>
        </div>
      </div>
      <div className="last-cont">
        <p> © Copyright 2021 Mountains</p>
        <p>
          <AiOutlineMessage />
        </p>
      </div>
    </section>
  );
};

export default Footer;
