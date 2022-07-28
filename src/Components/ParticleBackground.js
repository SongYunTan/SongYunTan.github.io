import React, { Component } from "react";
import Particles from "react-particles-js";

class ParticleBackground extends Component {
  render() {
    const config = this.props.config;

    return (
        <Particles className="particle-bg" params={config}></Particles>
    )
  }
}

export default ParticleBackground;
