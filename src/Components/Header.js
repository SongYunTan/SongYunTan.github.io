import React, { Component } from "react";
import Fade from "react-reveal";
import ParticleBackground from "./ParticleBackground";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <section id="home">
        <ParticleBackground/>
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom duration={100}>
              <h1>{name}</h1>
            </Fade>
            <hr />
            <Fade bottom duration={100}>
              <h3>{description}</h3>
            </Fade>
          </div>
        </div>
      

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
        
      </section>
    );
  }
}

export default Header;
