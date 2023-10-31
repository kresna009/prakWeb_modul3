import React from "react";
import logo from "../assets/logo-ilab.png";
import "./footer.css";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="container-foot">
      <div className="col-1">
        <div className="logo">
          <img src={logo} alt="logo-footer" />
          <p className="title-foot">Copyright © 2022. Infinite Learning</p>
        </div>
      </div>
      <div className="col-2">
        <p className="title-foot">Services</p>
        <p>Email Marketing</p>
        <p>Campaigns</p>
        <p>Branding</p>
        <p>Offline</p>
      </div>
      <div className="col-3">
        <p className="title-foot">About</p>
        <p>Our Story</p>
        <p>Benefits</p>
        <p>Team</p>
        <p>Careers</p>
      </div>
      <div className="col-4">
        <p className="title-foot">
          <span>Follow Us</span>
        </p>
        <p>
          <span>
            <AiFillFacebook />
            Facebook
          </span>
        </p>
        <p>
          <span>
            <AiOutlineTwitter />
            Twitter
          </span>
        </p>
        <p>
          <span>
            <AiOutlineInstagram />
            Instagram
          </span>
        </p>
      </div>
    </div>
  );
}
