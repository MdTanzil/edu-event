/* eslint-disable no-unused-vars */
import Particles from "react-tsparticles";

import "./Hero.css";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = async (main) => {
    //  console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particlesLoaded = useCallback(async (container) => {
    //  await console.log(container);
  }, []);
  return (
    <div
      className="roboto relative"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <Particles
        className="absolute w-full"
        height="75vh"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          fullScreen: { enable: false, zIndex: -1 },

          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.6,
              },
            },
          },
          particles: {
            color: {
              value: ["#F8526B", "#040a17", "#000000"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "top",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="hero h-[75vh] ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl text-black font-bold">
              Efficient Planning and{" "}
              <span className="text-[#F8526B]"> Coordination</span>
            </h1>
            <p className="py-6 barlow font-medium">
              Explore how advanced event management systems streamline the
              planning process, from scheduling and resource allocation to
              communication and collaboration among educators, students, and
              administrators.
            </p>
            <button className="btn bg-[#F8526B] text-white hover:bg-[#F8526B]">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <canvas className="background"></canvas>
    </div>
  );
};

export default Hero;
