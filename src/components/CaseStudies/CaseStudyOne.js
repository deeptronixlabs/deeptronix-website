import React from "react";
import { Link } from "react-router-dom";

export default function CaseStudyOne() {
  return (
    <section
      id="caseStudies"
      className="bg-main-gray w-full py-16 md:py-[130px]"
    >
      <div className="w-full mx-auto theme-container">
        <div className="max-w-[661px] w-full flex flex-col items-center mx-auto">
          <h1 className="border text-purple border-purple/10 py-0.5 px-5 rounded-[30px] w-fit bg-main-gray mb-1">
            DT Solutions
          </h1>
          <h2 className="pt-5 font-semibold text-center text-black text-24 sm:text-48">
            Transform Your Data into Action with Custom AI
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[30px] mt-10 md:mt-[70px]">
          {/* <!-- card start  --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white p-2.5 col-span-1 rounded-3xl h3_case_card_shadow transition-all duration-300 cursor-pointer gap-4">
            <div className="flex flex-col justify-center h-full col-span-1 px-4 md:px-10">
              <p className="text-paragraph">DT Insight</p>
              <h3 className="case_card_title text-black text-24 font-semibold pt-0.5">
                <Link to="#"> Your Fully Customizable Remote Sensing Dashboard </Link>
              </h3>
              <p className="text-paragraph py-[30px]">
                DT Sight is Deeptronix's customizable remote sensing dashboard, offering powerful insights and unmatched flexibility. With advanced tools for satellite imagery analysis, AI-driven insights, and seamless geospatial data integration, DT Insight enables data-driven decisions across industries like agriculture, forestry, and environmental management. Experience next-level geospatial intelligence tailored to your needs.
              </p>
              {/* <Link to="#">
                <div className="overflow-hidden flex gap-2 items-center justify-center border border-main-black/10 rounded-[41px] px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <span className="relative z-10 font-semibold text-main-black group-hover:text-white">
                    Read More
                  </span>
                  <svg
                    className="relative z-10 transition-all duration-100"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-100 group-hover:stroke-white"
                      d="M1 10.5L4.79289 6.70711C5.12623 6.37377 5.29289 6.20711 5.29289 6C5.29289 5.79289 5.12623 5.62623 4.79289 5.29289L1 1.5"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link> */}
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="col-span-1 overflow-hidden rounded-2xl"
            >
              <img
                src="/assets/images/home-five/hero/DTinsight.png"
                alt=""
                className="object-cover w-full"
                style={{height:"400px"}}
              />
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white p-2.5 col-span-1 rounded-3xl h3_case_card_shadow transition-all duration-300 cursor-pointer gap-4">
            <div className="flex flex-col justify-center h-full col-span-1 px-4 md:px-10">
              <p className="text-paragraph">DT GIS</p>
              <h3 className="case_card_title text-black text-24 font-semibold pt-0.5">
                <Link to="#">
                 Innovative GIS Solutions by Deeptronix
                </Link>
              </h3>
              <p className="text-paragraph py-[30px]">
                DT GIS offers cutting-edge Geographic Information System (GIS) solutions to empower businesses, governments, and organizations with spatial intelligence. Our services are designed to integrate, analyze, and visualize geospatial data for better decision-making and operational efficiency.
              </p>
              {/* <Link to="#">
                <div className="overflow-hidden flex gap-2 items-center justify-center border border-main-black/10 rounded-[41px] px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <span className="relative z-10 font-semibold text-main-black group-hover:text-white">
                    Read More
                  </span>
                  <svg
                    className="relative z-10 transition-all duration-100"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-100 group-hover:stroke-white"
                      d="M1 10.5L4.79289 6.70711C5.12623 6.37377 5.29289 6.20711 5.29289 6C5.29289 5.79289 5.12623 5.62623 4.79289 5.29289L1 1.5"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link> */}
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="col-span-1 overflow-hidden rounded-2xl"
            >
              <img
                src="/assets/images/home-five/hero/DTgis2.png"
                alt=""
                className="object-cover w-full"
                style={{height:"400px"}}
              />
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white p-2.5 col-span-1 rounded-3xl h3_case_card_shadow transition-all duration-300 cursor-pointer gap-4">
            <div className="flex flex-col justify-center h-full col-span-1 px-4 md:px-10">
              <p className="text-paragraph">DT Vision</p>
              <h3 className="case_card_title text-black text-24 font-semibold pt-0.5">
                <Link to="#">Your Fully Customizable Computer Vision Platform</Link>
              </h3>
              <p className="text-paragraph py-[30px]">
                DT Vision is Deeptronix's advanced computer vision platform, offering precision and adaptability for your unique needs. Powered by OpenCV, it supports image classification, object detection, segmentation, and tracking. Fully customizable, DT Vision empowers clients across industries to automate processes, enhance security, and analyze visual data with AI-driven solutions. Transform complex challenges into actionable insights with DT Vision.
              </p>
              {/* <Link to="#">
                <div className="overflow-hidden flex gap-2 items-center justify-center border border-main-black/10 rounded-[41px] px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <span className="relative z-10 font-semibold text-main-black group-hover:text-white">
                    Read More
                  </span>
                  <svg
                    className="relative z-10 transition-all duration-100"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-100 group-hover:stroke-white"
                      d="M1 10.5L4.79289 6.70711C5.12623 6.37377 5.29289 6.20711 5.29289 6C5.29289 5.79289 5.12623 5.62623 4.79289 5.29289L1 1.5"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link> */}
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="col-span-1 overflow-hidden rounded-2xl"
            >
              <img
                src="/assets/images/home-five/hero/DTvision2.png"
                alt=""
                className="object-cover w-full"
                style={{height:"400px"}}
              />
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white p-2.5 col-span-1 rounded-3xl h3_case_card_shadow transition-all duration-300 cursor-pointer gap-4">
            <div className="flex flex-col justify-center h-full col-span-1 px-4 md:px-10">
              <p className="text-paragraph">DT Agent</p>
              <h3 className="case_card_title text-black text-24 font-semibold pt-0.5">
                <Link to="#">
                 Transformative LLM Solutions for Your Needs
                </Link>
              </h3>
              <p className="text-paragraph py-[30px]">
                DT Agent is Deeptronix's advanced suite of Large Language Model (LLM) products, designed to transform AI interactions. It offers customizable solutions for remote sensing analysis, customer support, sentiment analysis, and children’s education. Empowering industries like agriculture and forestry, enhancing customer experiences, unlocking insights from feedback, and creating interactive learning tools, DT Agent provides tailored, AI-driven intelligence for businesses, educators, and researchers.
              </p>
              {/* <Link to="#">
                <div className="overflow-hidden flex gap-2 items-center justify-center border border-main-black/10 rounded-[41px] px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <span className="relative z-10 font-semibold text-main-black group-hover:text-white">
                    Read More
                  </span>
                  <svg
                    className="relative z-10 transition-all duration-100"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-100 group-hover:stroke-white"
                      d="M1 10.5L4.79289 6.70711C5.12623 6.37377 5.29289 6.20711 5.29289 6C5.29289 5.79289 5.12623 5.62623 4.79289 5.29289L1 1.5"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link> */}
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="col-span-1 overflow-hidden rounded-2xl"
            >
              <img
                src="/assets/images/home-five/hero/DTagen.png"
                alt=""
                className="object-cover w-full"
                style={{height:"400px"}}
              />
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white p-2.5 col-span-1 rounded-3xl h3_case_card_shadow transition-all duration-300 cursor-pointer gap-4">
            <div className="flex flex-col justify-center h-full col-span-1 px-4 md:px-10">
              <p className="text-paragraph">DT Gen</p>
              <h3 className="case_card_title text-black text-24 font-semibold pt-0.5">
                <Link to="#">
                   Cutting-Edge Generative AI for Predictive Visualization
                </Link>
              </h3>
              <p className="text-paragraph py-[30px]">
                DT Gen is Deeptronix's Generative AI, offering predictive visualization for diverse applications. It provides actionable insights in areas like emergency response, customer behavior, and stock market analysis. By leveraging advanced AI, DT Gen helps businesses and governments make data-driven decisions, turning complex data into clear, predictive visualizations. Stay ahead with DT Gen.
              </p>
              {/* <Link to="#">
                <div className="overflow-hidden flex gap-2 items-center justify-center border border-main-black/10 rounded-[41px] px-[30px] py-1.5 w-fit relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <span className="relative z-10 font-semibold text-main-black group-hover:text-white">
                    Read More
                  </span>
                  <svg
                    className="relative z-10 transition-all duration-100"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-100 group-hover:stroke-white"
                      d="M1 10.5L4.79289 6.70711C5.12623 6.37377 5.29289 6.20711 5.29289 6C5.29289 5.79289 5.12623 5.62623 4.79289 5.29289L1 1.5"
                      stroke="#101828"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link> */}
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="col-span-1 overflow-hidden rounded-2xl"
            >
              <img
                src="/assets/images/home-five/hero/DTgen2.png"
                alt=""
                className="object-cover w-full"
                style={{height:"400px"}}
              />
            </div>
          </div>
          {/* <!-- card end  --> */}
        </div>
      </div>
    </section>
  );
}
