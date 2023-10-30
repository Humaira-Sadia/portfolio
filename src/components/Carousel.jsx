import React from "react";
import Cards from "./Cards";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const cardData = [
    {
      img: "/assets/bg-main.png",
      title: "MindMaze",
      content:
        "Android app: Quiz app developed in Android Studio using Java for interactive learning.",
      gitLink: "https://github.com/Humaira-Sadia/Quiz-App.git",
      liveLink: "https://github.com/Humaira-Sadia/Quiz-App.git",
    },
    {
      img: "/assets/bg-main.png",
      title: "ThermoShift",
      content:
        "Android app: Convert temperatures with ease, a handy tool on-the-go.",
      gitLink: "https://github.com/Humaira-Sadia/Temperature_Converter.git",
      liveLink: "https://github.com/Humaira-Sadia/Temperature_Converter.git",
    },
    {
      img: "/assets/bg-main.png",
      content:
        "Sumz summarizes articles from URLs into concise, informative three-paragraph summaries.",
      title: "Summarizer",
      gitLink: "https://github.com/Humaira-Sadia/Summarizer.git",
      liveLink: "https://humaira-sadia.github.io/Summarizer/",
    },
    {
      img: "/assets/bg-main.png",
      content:
        "Text-to-speech app with varied voices, built in React, Tailwind, and Vite.",
      title: "VocalizeXpress",
      gitLink: "https://github.com/Humaira-Sadia/TTS.git",
      liveLink: "https://github.com/Humaira-Sadia/TTS.git",
    },
    {
      img: "/assets/bg-main.png",
      content:
        "Online platform to create and format professional resumes effortlessly.",
      title: "ResuBuild",
      gitLink: "https://github.com/Humaira-Sadia/Resume-Builder.git",
      liveLink: "https://humaira-sadia.github.io/Resume-Builder/",
    },
    {
      img: "/assets/bg-main.png",
      title: "QR Code Craftsmaster",
      content:
        "Node.js-based QR code generator: Create, download, and customize QR codes easily.",
      gitLink: "https://github.com/Humaira-Sadia/QR-Code-Generator.git",
      liveLink: "https://github.com/Humaira-Sadia/QR-Code-Generator.git",
    },
    {
      img: "/assets/bg-main.png",
      title: "Sudoku",
      content:
        "Interactive Sudoku game site for fun, challenge, and brain exercise.",
      gitLink: "https://github.com/Humaira-Sadia/Sudoku-Game..git",
      liveLink: "https://humaira-sadia.github.io/Sudoku-Game./",
    },
    {
      img: "/assets/bg-main.png",
      title: "Todo App",
      content:
        "React.js-based to-do app for efficient task management and organization.",
      gitLink: "https://github.com/Humaira-Sadia/Todo-App.git",
      liveLink: "https://github.com/Humaira-Sadia/Todo-App.git",
    },
    {
      img: "/assets/bg-main.png",
      title: "Payment_Gateway",
      content:
        "React.js-based to-do app for efficient task management and organization.",
      gitLink: "https://github.com/Humaira-Sadia/Todo-App.git",
      liveLink: "https://github.com/Humaira-Sadia/Todo-App.git",
    },
    {
      img: "/assets/bg-main.png",
      title: "Tribute Page",
      content:
        "React.js-based to-do app for efficient task management and organization.",
      gitLink: "https://github.com/Humaira-Sadia/Todo-App.git",
      liveLink: "https://github.com/Humaira-Sadia/Todo-App.git",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="p-10 sm:hidden">
      <Slider {...settings}>
        {cardData.slice(2, 9).map((card, index) => (
          <div key={index}>
            <Cards
              img={card.img}
              title={card.title}
              content={card.content}
              git={card.gitLink}
              live={card.liveLink}
            />
          </div>
        ))}
      </Slider>
    </main>
  );
};

export default Carousel;
