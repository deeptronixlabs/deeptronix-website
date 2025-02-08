import React from "react";

export default function WorkProcessTwo() {
  return (
    <section id="workingProcess" className="bg-white py-20 md:py-[130px]" style={{paddingBottom:"100px"}}>
      <div className="theme-container mx-auto grid grid-cols-6 lg:grid-cols-12 gap-[30px]">
        <div className="col-span-6">
          <h1 className="px-5 bg-main-gray border border-it-blue/20 text-it-blue font-medium rounded-[30px] w-fit">
            AI-Powered Solutions Consulting
          </h1>
          <h2 className="max-w-[747px] font-semibold text-24 sm:text-48 text-main-black mt-5">
          We offer tailored consulting to help businesses effectively use AI, remote sensing, and computer vision.
          </h2>
          <div className="w-fit relative mt-[88px]">
            <img
              src="/assets/images/home-five/hero/services2.png"
              alt=""
              style={{borderRadius:"16px"}}
            />
            {/* <button className="w-[50px] sm:w-[100px] aspect-square rounded-[10px] flex justify-center items-center absolute -bottom-[25px] sm:-bottom-[50px] right-0 bg-it-blue">
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0613 15.1781L5.47652 23.5123C3.03627 24.9067 0 23.1447 0 20.3342V3.66584C0 0.855278 3.03627 -0.906735 5.47652 0.487697L20.0613 8.82185C22.5204 10.2271 22.5204 13.7729 20.0613 15.1781Z"
                  fill="white"
                />
              </svg>
            </button> */}
          </div>
        </div>
        <div className="col-span-6 flex flex-col gap-[30px]">
          {/* <!-- single card  --> */}
          <div className="grid grid-cols-6 gap-12 md:grid-cols-12">
            <div className="col-span-6">
              <img
                src="/assets/images/home-five/hero/services3.jpg"
                alt=""
                className="rounded-lg"
                style={{height:"250px"}}
              />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col justify-center h-full">
                <div className="flex items-center justify-center w-10 border rounded-full aspect-square border-it-blue">
                  <h1 className="font-semibold text-it-blue">01</h1>
                </div>
                <h1 className="mt-4 mb-3 font-semibold text-18 text-main-black">
                  AI Strategy Development
                </h1>
                <p className="text-paragraph">
                  Crafting customized AI roadmaps to enhance your operations and decision-making.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- single card  --> */}
          <div className="grid grid-cols-6 gap-12 md:grid-cols-12">
            <div className="col-span-6">
              <img
                src="/assets/images/home-five/hero/services4.png"
                alt=""
                className="rounded-lg"
                style={{height:"250px", width:"500px"}}
              />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col justify-center h-full">
                <div className="flex items-center justify-center w-10 border rounded-full aspect-square border-it-blue">
                  <h1 className="font-semibold text-it-blue">02</h1>
                </div>
                <h1 className="mt-4 mb-3 font-semibold text-18 text-main-black">
                	Remote Sensing Solutions
                </h1>
                <p className="text-paragraph">
                 Advising on satellite data integration, analysis, and applications for industries like agriculture, forestry, and disaster management.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- single card  --> */}
          <div className="grid grid-cols-6 gap-12 md:grid-cols-12">
            <div className="col-span-6">
              <img
                src="/assets/images/home-five/hero/services5.png"
                alt=""
                className="rounded-lg"
                style={{height:"250px", width:"500px"}}
              />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col justify-center h-full">
                <div className="flex items-center justify-center w-10 border rounded-full aspect-square border-it-blue">
                  <h1 className="font-semibold text-it-blue">03</h1>
                </div>
                <h1 className="mt-4 mb-3 font-semibold text-18 text-main-black">
                	Computer Vision Implementation
                </h1>
                <p className="text-paragraph">
                Providing insights on deploying image classification, object detection, and other advanced computer vision technologies.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- single card  --> */}
          <div className="grid grid-cols-6 gap-12 md:grid-cols-12">
            <div className="col-span-6">
              <img
                src="/assets/images/home-five/hero/services6.png"
                alt=""
                className="rounded-lg"
                style={{height:"250px", width:"500px"}}
              />
            </div>
            <div className="col-span-6">
              <div className="flex flex-col justify-center h-full">
                <div className="flex items-center justify-center w-10 border rounded-full aspect-square border-it-blue">
                  <h1 className="font-semibold text-it-blue">04</h1>
                </div>
                <h1 className="mt-4 mb-3 font-semibold text-18 text-main-black">
                	Custom AI & Geospatial Solutions
                </h1>
                <p className="text-paragraph">
                Designing and optimizing tools and platforms to meet your specific business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
