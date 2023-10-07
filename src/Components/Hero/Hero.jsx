import Particles from "particlesjs";
import "./Hero.css";
import { useEffect } from "react";

const Hero = () => {
  // window.onload =  function  () {
  //   Particles.init({
  //     selector: ".background",
  //     color: ["#F8526B", " #f9f9f9", "rgb(4, 10, 23)"],
  //     maxParticles: 180,
  //     sizeVariations: 5,
  //     speed: 1,
  //     minDistance: 150,
  //   });
  //   requestAnimationFrame(Particles)
  // };


  return (
    <div className="roboto">
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
