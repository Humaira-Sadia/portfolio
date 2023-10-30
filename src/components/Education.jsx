import React from 'react'
import { BsFillCalendarDayFill } from "react-icons/bs";

const Education = () => {
  return (
    <div className="item h-full p-5 md:flex gap-5">
                  <div className="left md:w-1/2 md:flex flex-col justify-center">
                    <div className="date flex  md:flex items-center pt-2 pb-1 font-bold">
                      <span className="mr-2 ">
                        <BsFillCalendarDayFill />
                      </span>
                      2021 - 2025
                    </div>

                    <p className="font-bold pb-1">
                      Bachelor of Technology (Btech) <br />
                      in Computer Science and Engineering
                    </p>

                    <h1 className="font-bold md:font-semibold text-3xl md:text-4xl pb-1">
                      Aliah University
                    </h1>

                    <img src="/src/assets/aliah.jpg" alt="university" />

                    <p className="pb-2">
                      Action Area 11, Plot No. 11A/27, Newtown, <br />
                      Kolkata, West Bengal 700156
                    </p>
                    <span className="font-bold pb-2 gradient__text">
                      with an overall 8.5 cgpa in each semester
                    </span>
                  </div>

                  <div className="right  md:w-1/2 flex flex-col justify-center">
                    <div className="date flex  md:flex items-center pt-2 pb-1 font-bold">
                      <span className="mr-2 ">
                        <BsFillCalendarDayFill />
                      </span>
                      2019 - 2021
                    </div>

                    <p className="font-bold pb-1">Science, High School</p>

                    <h1 className="font-bold md:font-semibold text-2xl md:text-4xl pb-1">
                      St Teresa's Secondary School
                    </h1>

                    <img src="/src/assets/teresas.png" alt="university" />

                    <p className="pb-2">Kolkata, West Bengal 700023</p>
                    <span className="font-bold pb-2 gradient__text">Percentage: 92.25</span>
                  </div>
                </div>
  )
}

export default Education