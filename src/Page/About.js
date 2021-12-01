import React from "react";
import Typical from "react-typical";
import { UilAt, UilHouseUser, UilPhone } from "@iconscout/react-unicons";
export default function About() {
  return (
    <div className="flex bg-primary-sunflower  h-screen items-center ">
      <div className="flex  justify-around items-start space-y-5   w-full  ">
        <div className="flex flex-col text-xl   font-bold w-full p-5 sm:w-1/2">
          <Typical
            steps={["Hi!", 500, "I'am Yiğitcan", 1000]}
            loop={Infinity}
            wrapper="p"
            className="text-2xl text-primary-aurora"
          />
          <br />
          <label className="text-sm sm:text-xl text-primary-white">
            I am a computer engineer. I love coding and working. I graduated
            from trakya university in 2021. I am developing and working on
            frontend and backend. I like working on web and mobile projects.
          </label>
          <br />

          <div className="flex flex-col items-start lg:flex-row justify-between">
            <div className="flex justify-center items-center space-x-1">
              <UilPhone className="text-primary-white hover:bg-primary-black rounded-full duration-500 p-1" />
              <label className="text-sm sm:text-lg text-primary-white">
                +90 535 915 18 72
              </label>
            </div>
            <div className="flex justify-center items-center space-x-1">
              <UilHouseUser className="text-primary-white hover:bg-primary-black rounded-full duration-500 p-1" />
              <label className="text-sm sm:text-lg text-primary-white">
                Istanbul
              </label>
            </div>
            <div className="flex justify-center items-center space-x-1">
              <UilAt className="text-primary-white hover:bg-primary-black rounded-full duration-500 p-1" />
              <label className="text-sm sm:text-lg text-primary-white">
                yigitcansezekk@hotmail.com
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
