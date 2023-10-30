import React from "react";
import { FaGithub, FaRegShareFromSquare } from "react-icons/fa6";

const Cards = (props) => {
  return (
    <div className="card section h-[250px] w-[250px] rounded-lg p-2">
      <div className="box flex flex-col justify-center items-center ">
        <div className="box-content w-full h-full">
          <div className="box-front flex justify-center items-center rounded-t-lg">
            <img className="w-full h-full" src={props.img} alt="" />
          </div>
          <div className="box-back flex p-2 max-w-full">
            <div className="flex justify-center items-center w-full overflow-hidden text-ellipsis rounded-t-lg gradient__text font-bold">
              {props.content}
            </div>
          </div>
        </div>
      </div>

      <div className="bottom w-full p-2">
        <h1 className="flex justify-center font-bold text-xl">{props.title}</h1>
        <div className="flex justify-between mt-4 text-xl cursor-pointer">
          <a href={props.git}>
            <FaGithub />
          </a>
          {props.live ? (
            <a href={props.live}>
              <FaRegShareFromSquare />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Cards;
