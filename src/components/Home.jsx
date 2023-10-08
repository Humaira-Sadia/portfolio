import React from "react";
import { Typewriter, Cursor } from 'react-simple-typewriter'


const Home = () => {
  return (
    <main name="home" className="h-screen w-full" id="home">
      <div className="body max-w-screen-lg mx-auto md:flex md:justify-center md:items-center  h-full">
        <div className="flex flex-col justify-center items-center w-full h-[70%] md:h-full p-4 gap-3 md:items-start"
        >
          <h3 className="text-[20px] md:text-2xl">Hii there 👏 I'm</h3>
          <h1 className="text-5xl md:text-6xl">Humaira Sadia</h1>
          <h2 className="text-3xl md:text-4xl">
            and I'm a{" "}
            <span className="gradient__text font-bold text-4xl md:text-5xl">
              <Typewriter
                words={["Developer", "YouTuber", "Freelancer", "Learner!"]}
                loop={100}
                typeSpeed={170}
                deleteSpeed={150}
                delaySpeed={1000}
              />
            </span>
            <Cursor />
          </h2>

          <div className="flex flex-row mt-5">
            <button className="bg-[#3A3838] p-2 mr-4 text-[#ae7ae2] font-bold rounded">
              Hire Me
            </button>
            <button className="bg-[#3A3838] p-2 text-[#ae7ae2] font-bold rounded">
              Download
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center" >
          <img
            className="w-[85%] md:w-full"
            src="./portfolio/public/assets/hero.png"
            alt="hero"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
