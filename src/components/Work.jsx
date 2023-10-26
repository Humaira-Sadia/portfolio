import React from "react";
import Portfolio from "./Portfolio";

const Work = () => {
  return (
    <main className="work flex justify-center items-center bg-red-500">
      <div className="body max-w-screen-2xl w-[100vw] mx-auto h-[100vh] lg:flex flex-row justify-center lg:items-end gap-6 lg:p-5">
        <div className="left md:w-1/4 h-[90%] bg-slate-400">Left</div>
        <div className="right md:w-3/4 h-[90%] bg-slate-800 p-3">
          <div className="title bg-red-400 flex justify-center items-center mb-10">
            <h2 className="text-white text-4xl font-bold p-3">Work</h2>
          </div>
          <div className="body h-[77%] p-2 bg-red-300 ">
            <Portfolio/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Work;
