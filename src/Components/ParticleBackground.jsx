import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Particles 
      className="particle-bg" 
      id="tsparticles"
      init={particlesInit} 
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        fullScreen: { enable: true, zIndex: -1 },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 50,
              duration: 0.4
            },
            push: {
              quantity: 4
            }
          }
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: false,
              area: 800
            }
          },
          color: {
            value: "#FFDCF4"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.7,
            random: false,
          },
          size: {
            value: 3,
          },
          links: {
            enable: true,
            distance: 120,
            color: "#6495ED",
            opacity: 0.6,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        detectRetina: true,
    }}
    />
  )
}

export default ParticleBackground;
