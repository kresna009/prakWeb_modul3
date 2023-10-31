import React, { Component } from "react";
// import bg from "../assets/hero.jpg";
import "./hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        {/* <img src={bg} alt="" /> */}
        <div class="tittle">
          <h1 class="tittle-pages display-2">Selamat Datang</h1>
          <h4 class="subtittle">di website Praktikum Pemrograman website</h4>
        </div>
      </div>
    );
  }
}
