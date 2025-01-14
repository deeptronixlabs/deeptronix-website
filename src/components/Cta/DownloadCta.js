import React from "react";
import { Link } from "react-router-dom";

export default function DownloadCta() {
  return (
    <section id="ourApp" className="pb-[30px] pt-[130px] ">
      <div className="max-w-[1860px] w-full mx-auto relative overflow-hidden bg-[#10100E] rounded-[20px]">
        <img
          src="/assets/images/home-nine/cta-bg.svg"
          alt=""
          className="absolute z-0 hidden cta_bg_anim sm:block"
        />
        <div className="w-full mx-auto theme-container">
          <div className="py-[70px] md:py-[130px] relative z-10 grid grid-cols-6 lg:grid-cols-12">
            <div className="col-span-6 lg:my-auto">
              <h1 className="py-0.5 px-5 bg-white/10 border-white/20 border rounded-[30px] font-medium text-white w-fit">
                Let's Talk
              </h1>
              <h2
                className="text-24 sm:text-48 tracking-tight font-semibold text-white pr-2 mt-5 max-w-[548px] relative z-10"
                data-depth="-0.28"
              >
                About your next project
              </h2>
              <p className="text-white mt-5 md:mt-5 max-w-[580px] relative z-10">
              We stand out as a trusted partner for innovative and impactful solutions
              </p>
              <div className="flex flex-col gap-3 mt-5 sm:flex-row sm:gap-6 md:mt-12">
                <Link to="/pricing">
                  <div className="home-two-btn-white group before:bg-app-main after:bg-app-main border-app-main hover:border-white hover:text-white text-main-black">
                    <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 font-inter">
                      Contact Us
                    </span>
                    <svg
                      className="relative z-10 transition-all duration-300"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.24464 0.191916C1.77515 -0.0675737 1.22393 -0.061574 0.757446 0.195665L6.22472 5.23921L8.0614 3.40253L2.24464 0.191916Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.209991 0.712158C0.0764969 0.930399 0 1.18014 0 1.44488V10.554C0 10.8105 0.0697471 11.055 0.195742 11.2687L5.69377 5.7707L0.209991 0.712158Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.4939 4.74698L8.74198 3.78027L6.77332 5.74819L9.18597 7.97335L10.4947 7.25113C10.9656 6.99014 11.2476 6.52216 11.2476 5.99868C11.2469 5.4752 10.9656 5.00722 10.4939 4.74698Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6.24703 6.27856L0.734009 11.7916C0.973249 11.9281 1.23574 12.0001 1.49973 12.0001C1.75472 12.0001 2.01121 11.9356 2.24595 11.8058L8.49844 8.35523L6.24703 6.27856Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className="h-full col-span-6">
              <img
                src="/assets/images/cta-robot.png"
                alt=""
                className="relative lg:absolute -bottom-[70px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
