import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../particle-config";

export default function ParticleBackground() {
    return (
        <Particles className="particle-bg" params={particlesConfig}></Particles>
    )
}