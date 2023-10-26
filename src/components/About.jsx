import React, { useState } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

const About = () => {
  const [activeTab, setActiveTab] = useState("Skills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const activeBtnColor = (tab) => {
    return activeTab === tab
      ? "underline underline-offset-8 decoration-[#F9CF5C] decoration-wavy	text-[#F9CF5C]"
      : "";
  };

  return (
    <main name="about" className="mt-40 lg:mt-0 p-2 flex justify-center lg:items-center">
      <div className="body max-w-screen-2xl w-[100vw] mx-auto h-auto lg:flex flex-row justify-center gap-10 mb-5">
        <div className="lg:flex md:flex-col justify-center item-center w-full lg:w-1/4  p-3 bg-[#3A3838] rounded-2xl">
          <img src="/assets/coding.gif" alt="girl" className="hidden lg:block p-5" />

          <div className="hidden  md:flex flex-col justify-center items-center mt-5">
            <h1 className="uppercase tracking-wide font-bold text-4xl">
              humaira sadia
            </h1>
            <h2>@humaira_786</h2>
          </div>

          <div className="mt-5">
            <h1 className="font-bold text-2xl pl-2 flex justify-center ">Social Info</h1>
            <div className="flex justify-around items-center h-16 mt-4">
              <a href="https://leetcode.com/humaira786/">
                <img
                  src="/assets/leetcode.svg"
                  className="h-12 bg-slate-300 rounded-full p-2 hover:scale-95 outline outline-offset-2"
                  alt="leetcode"
                />
              </a>

              <a href="https://auth.geeksforgeeks.org/user/humairasadia786">
                <img
                  src="/assets/gfg.svg"
                  className="h-12 w-12 bg-slate-300 rounded-full p-2 hover:scale-95 outline outline-offset-2"
                  alt="gfg"
                />
              </a>

              <a href="https://www.linkedin.com/in/humaira786/">
                <img
                  src="/assets/linkedin.svg"
                  className="h-12  bg-slate-300 rounded-full p-2 hover:scale-95 outline outline-offset-2"
                  alt="linkedin"
                />
              </a>

              <a href="https://www.youtube.com/@code_encoded">
                <img
                  src="/assets/youtube.svg"
                  className="h-12 w-12 bg-slate-300 rounded-full p-2 hover:scale-95 outline outline-offset-2"
                  alt="youtube"
                />
              </a>
              <a href="https://github.com/Humaira-Sadia">
                <img
                  src="/assets/github.svg"
                  className="h-12 w-12 bg-slate-300 rounded-full p-2 hover:scale-95 outline outline-offset-2"
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 p-3">
          <div className="title flex justify-center mb-2">
            <img src="./public/assets/spark.png" className="max-w-[4rem]" />
            <h1 className="flex items-center justify-center font-bold text-5xl">
              About
            </h1>
            <img src="./public/assets/spark.png" className="max-w-[4rem]" />
          </div>
          <div className="bg-[#3A3838] h-[89%] rounded-2xl p-2">
            <div className="section flex gap-8 cursor-pointer font-bold uppercase mt-2 ml-2">
              <button
                onClick={() => handleTabClick("Skills")}
                className={
                  activeBtnColor("Skills") +
                  "p-2 active:border-none font-semibold text-sm md:text-lg"
                }
              >
                Skills
              </button>
              <button
                onClick={() => handleTabClick("Educations")}
                className={
                  activeBtnColor("Educations") +
                  " p-2 active:border-none font-semibold text-sm md:text-lg"
                }
              >
                Education
              </button>
              <button
                onClick={() => handleTabClick("Experiences")}
                className={
                  activeBtnColor("Experiences") +
                  "p-2 active:border-none font-semibold text-sm md:text-lg"
                }
              >
                Experiences
              </button>
            </div>

            <div className="content mt-5 pb-3  h-[85%]">
              {activeTab === "Skills" && (
                <div className="skills">
                  <Skills/>
                </div>
              )}
              {activeTab === "Educations" && (
                <Education className="h-auto"/>
              )}
              {activeTab === "Experiences" && (
                <Experience/>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
