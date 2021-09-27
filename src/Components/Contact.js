import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a target="_blank" href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <h1>
            <span>Contact</span>
          </h1>
          
          <p className="lead">{message}</p>
          <ul className="social-links">{networks}</ul>
          
        </Fade>
      </section>
    );
  }
}

export default Contact;
