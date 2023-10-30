import React from "react";
import Cards from "./Cards";
import Carousel from "./Carousel";

const Work = () => {
  const cardData = [
    {
      img: "/src/assets/bg-main.png",
      title: "MindMaze",
      content:
        "Android app: Quiz app developed in Android Studio using Java for interactive learning.",
      gitLink: "https://github.com/Humaira-Sadia/Quiz-App.git",
      liveLink: "https://github.com/Humaira-Sadia/Quiz-App.git",
    },
    {
      img: "/src/assets/bg-main.png",
      title: "ThermoShift",
      content:
        "Android app: Convert temperatures with ease, a handy tool on-the-go.",
      gitLink: "https://github.com/Humaira-Sadia/Temperature_Converter.git",
      liveLink: "https://github.com/Humaira-Sadia/Temperature_Converter.git",
    },
    {
      img: "/src/assets/bg-main.png",
      content:
        "Sumz summarizes articles from URLs into concise, informative three-paragraph summaries.",
      title: "Summarizer",
      gitLink: "https://github.com/Humaira-Sadia/Summarizer.git",
      liveLink: "https://humaira-sadia.github.io/Summarizer/",
    },
    {
      img: "/src/assets/bg-main.png",
      content:
        "Text-to-speech app with varied voices, built in React, Tailwind, and Vite.",
      title: "VocalizeXpress",
      gitLink: "https://github.com/Humaira-Sadia/TTS.git",
      liveLink: "https://github.com/Humaira-Sadia/TTS.git",
    },
    {
      img: "/src/assets/bg-main.png",
      content:
        "Online platform to create and format professional resumes effortlessly.",
      title: "ResuBuild",
      gitLink: "https://github.com/Humaira-Sadia/Resume-Builder.git",
      liveLink: "https://humaira-sadia.github.io/Resume-Builder/",
    },
    {
      img: "/src/assets/bg-main.png",
      title: "QR Code Craftsmaster",
      content:
        "Node.js-based QR code generator: Create, download, and customize QR codes easily.",
      gitLink: "https://github.com/Humaira-Sadia/QR-Code-Generator.git",
      liveLink: "https://github.com/Humaira-Sadia/QR-Code-Generator.git",
    },
    {
      img: "/src/assets/bg-main.png",
      title: "Sudoku",
      content:
        "Interactive Sudoku game site for fun, challenge, and brain exercise.",
      gitLink: "https://github.com/Humaira-Sadia/Sudoku-Game..git",
      liveLink: "https://humaira-sadia.github.io/Sudoku-Game./",
    },
    {
      img: "/src/assets/bg-main.png",
      title: "Todo App",
      content:
        "React.js-based to-do app for efficient task management and organization.",
      gitLink: "https://github.com/Humaira-Sadia/Todo-App.git",
      liveLink: "https://github.com/Humaira-Sadia/Todo-App.git",
    },
    {
      img: "/src/assets/bg-main.png",
      title: "Payment_Gateway",
      content:
        "React.js-based to-do app for efficient task management and organization.",
      gitLink: "https://github.com/Humaira-Sadia/Todo-App.git",
      liveLink: "https://github.com/Humaira-Sadia/Todo-App.git",
    },
    {
      img: "/src/assets/bg-main.png",
      title: "Tribute Page",
      content:
        "React.js-based to-do app for efficient task management and organization.",
      gitLink: "https://github.com/Humaira-Sadia/Todo-App.git",
      liveLink: "https://github.com/Humaira-Sadia/Todo-App.git",
    },
  ];

  return (
    <main className="work flex justify-center items-center ">
      <div className="body max-w-screen-2xl w-[100vw] mx-auto h-[80vh] md:h-[100vh] lg:flex flex-row justify-center lg:items-end lg:p-5">
        <div className="w-1/5 h-[90%] gap-2 rounded-lg lg:p-5  hidden lg:flex flex-col items-center justify-around">
          {cardData
            .slice(0, 2)
            .map(({ img, content, title, gitLink, liveLink }, index) => (
              <Cards
                key={index}
                img={img}
                title={title}
                content={content}
                git={gitLink}
                live={liveLink}
              />
            ))}
        </div>

        <div className="lg:w-3/4 h-[93%] rounded-lg">
          <div className="title  flex justify-center items-center mb-6">
            <h2 className="text-white text-4xl font-bold p-3">Work</h2>
          </div>
          <div className="p-5 h-[80%] hidden sm:flex flex-wrap gap-4 justify-center items-center overflow-y-scroll scrollbar-hide">
            {cardData
              .slice(2)
              .map(({ img, content, title, gitLink, liveLink }, index) => (
                <Cards
                  key={index}
                  img={img}
                  title={title}
                  content={content}
                  git={gitLink}
                  live={liveLink}
                />
              ))}
          </div>

          <Carousel />
        </div>
      </div>
    </main>
  );
};

export default Work;
