import React, { useEffect, useRef } from "react";
import { demoLinkData, pagesLinkData } from "../data";
import { Link } from "react-router-dom";

export default function DemoHeaderOne() {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY >= 76) {
          headerRef.current.classList.remove("h1-header-sticky-qs");
        } else {
          headerRef.current.classList.add("h1-header-sticky-qs");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <div
        ref={headerRef}
        className="fixed top-0 left-0 z-40 hidden w-full header-wrapper xl:block h1-header-sticky h1-header-sticky-qs"
      >
        <div className="2xl:px-[110px] px-56 mx-auto relative">
          <div className="w-full h-[45px] justify-between items-center pl-[50px] bg-white border border-[#e7e8e9] hidden h1-top-bar">
            <span className="hidden 2xl:block">
              Welcome to
              <span className="font-semibold text-purple"> Deeptronix Sdn Bhd.</span> Empowering Businesses Through Technology.
            </span>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(270deg, #794aff 50%,rgba(121, 74, 255, 0) 90.03%)",
              }}
              className="2xl:w-[700px] w-full h-full flex items-center justify-end"
            >
              <div className="flex space-x-2.5 items-center mr-7">
                <span>
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10.5001C21 10.0087 20.9947 9.01723 20.9842 8.52439C20.9189 5.45886 20.8862 3.92609 19.7551 2.79066C18.6239 1.65523 17.0497 1.61568 13.9012 1.53657C11.9607 1.48781 10.0393 1.48781 8.09882 1.53656C4.95033 1.61566 3.37608 1.65521 2.24495 2.79065C1.11382 3.92608 1.08114 5.45885 1.01576 8.52438C0.994745 9.51007 0.994745 10.4899 1.01577 11.4756C1.08114 14.5412 1.11383 16.0739 2.24496 17.2094C3.37608 18.3448 4.95033 18.3843 8.09883 18.4634C8.90159 18.4836 9.70108 18.4954 10.5 18.4989"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 4L7.91302 7.92462C10.4387 9.35846 11.5613 9.35846 14.087 7.92462L21 4"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 15.5L13 15.5M21 15.5C21 14.7998 19.0057 13.4915 18.5 13M21 15.5C21 16.2002 19.0057 17.5085 18.5 18"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-bold text-white">
                  Email : <u>sales@deeptronix.com.my</u>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-[95px] flex justify-between items-center px-[50px] border border-[#e7e8e9] bg-white border-t-0 relative">
            <div className="flex 2xl:space-x-[100px] xl:space-x-10 justify-between items-center w-full xl:w-auto">
              <div>
                <Link to="/" aria-label="logo">
                  <img src="/assets/images/LOGO-DEEPTRONIX.png" alt="" />
                </Link>
              </div>
              <div>
                <ul className="flex items-center space-x-10">
                  
                  <li className="font-semibold text-paragraph hover:underline hover:text-purple">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="font-semibold text-paragraph hover:underline hover:text-purple">
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li className="font-semibold text-paragraph hover:underline hover:text-purple">
                    <Link to="/our-services">Our Services</Link>
                  </li>
                  <li className="font-semibold text-paragraph hover:underline hover:text-purple">
                    <Link to="/our-solutions">Our Solutions</Link>
                  </li>
                  
                  {/* <li className="relative group">
                    <a
                      className="flex items-center gap-2 font-semibold text-paragraph hover:underline hover:text-purple"
                      href="#"
                    >
                      Pages
                      <svg
                        className="transition-all duration-300 group-hover:rotate-180"
                        width="10"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2L9.5 8L17 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <div className="absolute px-2 -left-7 h-0 group-hover:h-[480px] overflow-hidden top-5 transition-all duration-700">
                      <ul className="max-h-fit min-w-[200px] bg-white mt-8 transition-all duration-300 overflow-hidden px-5 top-20 pb-4 rounded-b-md">
                        {pagesLinkData.map((item, index) => (
                          <li key={index} className="relative py-1">
                            <Link
                              className="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter"
                              to={item.pageLink}
                            >
                              {item.linkLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li> */}
                  
                </ul>
              </div>
            </div>
            <div className="xl:flex hidden space-x-[30px] items-center">
              
              <Link to="/contact">
                <div className="py-3 home-two-btn-bg group bg-blue-seo border-blue-seo">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-seo font-inter">
                    Contact Us
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
                      className="transition-all duration-300 group-hover:stroke-blue-seo"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
