import React from "react";
// import Work from "./components/Work";

const About = () => {
  return (
    <main id="about">
      <div className="body max-w-screen-2xl mx-auto h-[86vh] flex flex-row justify-center  gap-10 mb-10">
        <div className="flex flex-col justify-center item-center w-1/4  p-3 bg-[#3A3838] rounded-2xl">
          <img src="./portfolio/public/assets/coding.gif" alt="girl" className="p-3" />

          <div className="flex flex-col justify-center items-center mt-5">
            <h1 className="uppercase tracking-wide font-bold text-4xl">
              humaira sadia
            </h1>
            <h2>@humaira_786</h2>
          </div>

          <div className="mt-5">
            <h1 className="font-bold text-2xl pl-2">Social Info</h1>
            <div className="flex justify-around items-center h-16 mt-4">
              <img
                src="./public/assets/leetcode.svg"
                className="h-14 bg-slate-300 rounded-full p-2 hover:scale-95 outline outline-offset-2"
                alt="leetcode"
              />

              <img
                src="./public/assets/gfg.svg"
                className="h-14 w-14 bg-slate-300 rounded-full p-2 hover:scale-95 outline outline-offset-2"
                alt="gfg"
              />

              <img
                src="./public/assets/linkedin.svg"
                className="h-14  bg-slate-300 rounded-full p-2 hover:scale-95 outline outline-offset-2"
                alt="linkedin"
              />

              <img
                src="./public/assets/youtube.svg"
                className="h-14 w-14 bg-slate-300 rounded-full p-2 hover:scale-95 outline outline-offset-2"
                alt="youtube"
              />
              <img
                src="./public/assets/github.svg"
                className="h-14 w-14 bg-slate-300 rounded-full p-2 hover:scale-95 outline outline-offset-2"
                alt="github"
              />
            </div>
          </div>
        </div>

        <div className=" w-2/3  p-3">
          <div className="title flex justify-center mb-2">
            <img src="./public/assets/spark.png" className="max-w-[4rem]" />
            <h1 className="flex items-center justify-center font-bold text-5xl">
              About
            </h1>
            <img src="./public/assets/spark.png" className="max-w-[4rem]" />
          </div>
          <div className="bg-[#3A3838] h-[89%] rounded-2xl p-2">
            <div className="section flex gap-8 cursor-pointer font-bold uppercase mt-2 ml-2">
              <button>Educations</button>
              <button>Skills</button>
              <button>Experiences</button>
            </div>

            <div className="content mt-10 ml-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis accusamus minima magnam ullam. Maxime nulla assumenda
                esse. Tempore fugiat, beatae earum voluptas, maxime fugit
                repellat unde voluptates, quis ipsa veritatis magni quos
                inventore? In cum, voluptate possimus distinctio consectetur
                voluptas! Vero facilis repudiandae enim nihil, neque hic
                praesentium amet. Aspernatur consectetur sit exercitationem,
                ipsum doloremque est, porro distinctio accusantium animi fuga
                ullam quasi ut ex earum eum, hic ipsa necessitatibus quia
                voluptates ipsam reprehenderit perspiciatis corrupti?
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
