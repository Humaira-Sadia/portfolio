import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Home/> */}
      {/* <About/> */}
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/work" element={<Work />} />
        <Route path="/portfolio/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
