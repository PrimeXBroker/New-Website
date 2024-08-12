import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";


const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
      const particlesLoaded = (container) => {
        console.log(container);
      };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit:120,
        background: {
          color: {
            value: "#CCC",
          },
        },
        fullScreen: {
          enable: false,
        },
        particles: {
          number: {
            value: 300,
          },
          collisions:{
            enable:true,
          },
          color: {
            value: "#FFF",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1,
          },
          size: {
            value: 4,
            random: {
              enable: true,
              minimumValue: 1,
            },
          },
          lineLinked: {
            enable: true,
            distance: 100,
            color: "#fff",
            opacity: 1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 250,
              lineLinked: {
                opacity: 0.5,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  )
}

export default ParticlesBackground