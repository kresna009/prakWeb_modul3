import React, { Component } from "react";
import "./contactContent.css";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

export default class ContactContent extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-title">
          <h1>Contact</h1>
        </div>
        <div className="wrapper-box">
          <div className="contact-information">
            <ul className="sosmed-contact">
              <ol>
                <h4>Follow Us On</h4>
              </ol>
              <ol>
                <AiFillFacebook />
                Facebook
              </ol>
              <ol>
                <AiOutlineTwitter />
                Twitter
              </ol>
              <ol>
                <AiOutlineInstagram />
                Instagram
              </ol>
            </ul>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="nama" id="username" />
            <input type="email" placeholder="email" id="email" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="leave your message"
            ></textarea>
            <button className="submit-btn" type="submit">
              submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
