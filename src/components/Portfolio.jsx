import React from "react";
import { FaGithub, FaRegShareFromSquare } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <div className="h-[250px] w-[250px] rounded-lg p-2 bg-red-600">
      {/* <div className="pic flex justify-center items-center w-full h-2/3 p-2 rounded-t-lg bg-red-200">
        pic
      </div> */}

      <div class="box">
        <div class="box-content">
          <div class="box-front">Box 1</div>
          <div class="box-back">Content</div>
        </div>
      </div>

      <div className="bottom w-full p-2">
        <h1 className="flex justify-center font-bold text-xl">Title</h1>
        <div className="flex justify-between mt-4 text-xl cursor-pointer">
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaRegShareFromSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
