import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function AboutService() {
  return (
    <section className="w-full py-16 md:pt-[94px] md:pb-[130px] items-center">
      <div className="w-full mx-auto theme-container">
        <div className="box-border grid grid-cols-6 lg:grid-cols-12">
          <div className="flex flex-col justify-center col-span-5">
            <h1 className="text-24 md:text-48 font-semibold text-main-black mt-2.5 md:mt-5">
            We leverage technologies to provides a powerful way for you to solve your issues at the click of your fingers.
            </h1>
            {/* <p className="pb-10 mt-5 md:mt-10 text-paragraph">
              Defined by digital dynamism, our digital marketing agency emerges
              as a beacon of innovation and strategic prowess.
            </p> */}
            {/* <Link to="/projects">
              <div className="home-two-btn-bg group bg-[#4A7DFF] border-[#4A7DFF] py-[15px]">
                <span className="text-base group-hover:text-[#4A7DFF] text-white transition-all duration-300 font-semibold font-inter relative z-10">
                  Explore Service
                </span>
                <svg
                  className="relative z-10"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-[#4A7DFF] stroke-white transition-all duration-300"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link> */}
          </div>
          <div className="relative flex flex-col justify-end w-full col-span-7 overflow-hidden sm:flex-row">
            <img
              src="/assets/images/service/services.png"
              alt="img"
              className="mt-9 w-full max-w-[630px]"
            />
            <div className="bg-purple p-6 rounded-2xl sm:absolute z-20 bottom-8 w-full sm:w-[155px] left-[152px] mt-5 sm:mt-0 max-w-full">

              <img
                src="/assets/images/home-five/hero/about-card-shape.webp"
                alt=""
                className="absolute right-2 top-bottom-moving"
              />
              {/* <div className="flex items-center gap-2.5">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.28753 7.01343L8.90454 1.36956M8.90454 1.36956L3.26066 1.75255M8.90454 1.36956L1.01321 10.4099"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm leading-8 text-white">We have</span>
              </div>

              <h1 className="text-18 text-white font-semibold tracking-tight max-w-[170px]">
                <CountUp start={0} end={25} /> + Awards Winning
              </h1> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
