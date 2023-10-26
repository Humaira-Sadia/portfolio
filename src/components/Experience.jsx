import React from 'react'
import { BsFillCalendarDayFill } from "react-icons/bs";


const Experience = () => {
  return (
    <div className="item h-full p-5 md:flex gap-5">
                  <div className="left md:w-1/2 md:flex flex-col justify-center">
                    <div className="date flex  md:flex items-center pt-2 pb-2 font-bold">
                      <span className="mr-2 ">
                        <BsFillCalendarDayFill />
                      </span>
                      Nov-2022 - Dec-2022
                    </div>

                    <p className="font-bold pb-3">
                      Web Developement and Design Intern
                    </p>

                    <h1 className="font-semibold text-4xl pb-4 gradient__text">
                      Sparks Foundation
                    </h1>
                    <ul className="font-bold text-1xl pb-6">
                      Managed and optimised dataBase faciliated Payment Gateway
                      Integration
                    </ul>
                    <span className="font-bold pb-4">
                      Tech Stack : Javascript , CSS , Razorpay Payment Gateway
                    </span><br />
                    <a href="https://github.com/Humaira-Sadia/Payment_Gateway">
                      <span className="font-bold cursor-pointer underline underline-offset-4 decoration-double">
                        Github
                      </span>
                    </a>
                  </div>
                  

                  <div className="right mt-10 md:w-1/2 flex flex-col justify-center">
                    <div className="date flex  md:flex items-center pt-2 pb-1 font-bold">
                      <span className="mr-2 ">
                        <BsFillCalendarDayFill />
                      </span>
                      Jul-2023 - Aug-2023
                    </div>

                    <p className="font-bold pb-1">
                      Android App Developement Intern
                    </p>

                    <h1 className="font-semibold text-4xl pb-3 gradient__text">
                      CodSoft
                    </h1>
                    <p className="font-bold pb-4">
                      used a weather data API (e.g., OpenWeatherMap or Weather
                      API) to fetch weather information. <br /> Integrated with
                      a service like Firebase Cloud Messaging (FCM).
                    </p>
                    <span className="font-bold pb-4">
                      Tech Stack : Java , Android Studio , APIs and Firebase
                      Cloud Messaging
                    </span>
                    <a href="https://github.com/Humaira-Sadia/CODSOFT-Currency-Exchange-App">
                      <span className="font-bold cursor-pointer underline underline-offset-4 decoration-double">
                        Github
                      </span>
                    </a>
                  </div>
                </div>
  )
}

export default Experience