import React, { Component } from "react";
import NavBar from "../components/navbar";
import ContactContent from "../components/contactContent";
import Footer from "../components/footer";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContactContent />
        <Footer />
      </div>
    );
  }
}
