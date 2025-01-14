import Link from "next/link";
import React from "react";

export default function PriceMain() {
  return (
    <section id="h4-pricing" className="relative w-full overflow-hidden">
      <div className="w-full h4-pricing-wrapper pb-6 md:pb-12 pt-16 md:pt-[130px] pricing_section_bg">
        <div className="mx-auto theme-container">
          <div className="w-full">
            <div className="flex justify-center w-full title-area">
              <div className="flex flex-col items-center">
                <div className="py-0.5 px-5 bg-purple/5 border-purple/10 border rounded-[30px] font-medium text-purple mb-5">
                  <span>Pricing Package</span>
                </div>
                <div className="mb-[60px]">
                  <h2 className="text-main-black font-semibold text-24 sm:text-48 text-center max-w-[819px]">
                    We Provide Amazing Pricing Package For Creative Solutions
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[30px]">
              {/* <!-- single card  start --> */}
              <div className="col-span-4 border border-purple/10 bg-main-gray rounded-xl p-5 md:p-[50px] hover:bg-purple transition-all duration-300 group">
                <h1 className="pb-4 font-semibold transition-all duration-300 text-18 text-main-black group-hover:text-white">
                  Regular Plan
                </h1>
                <span className="font-semibold transition-all duration-300 text-48 text-purple font-inter group-hover:text-white">
                  $29.00
                </span>
                <span className="text-base leading-[30px] text-paragraph font-normal group-hover:text-white transition-all duration-300">
                  / per monthly
                </span>
                <p className="pt-4 pb-8 transition-all duration-300 text-paragraph group-hover:text-white">
                  Basic plan for all users
                </p>
                <Link href="/pricing">
                  <div className="home-two-btn-white group/btn">
                    <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover/btn:text-white font-inter text-purple">
                      Choose This Package
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
                        className="transition-all duration-300 group-hover/btn:stroke-white stroke-purple"
                        d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <ul className="flex flex-col gap-4 mt-9">
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      Subscription-Based Pricing
                    </span>
                  </li>
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      Pay-Per-Use Based Pricing
                    </span>
                  </li>
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      10,000 Monthly Word Limit
                    </span>
                  </li>
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      10+ Languages trasnlations
                    </span>
                  </li>
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      All types of content
                    </span>
                  </li>
                </ul>
              </div>
              {/* <!-- single card end  --> */}
              {/* <!-- single card  start --> */}
              <div
                data-aos="zoom-out"
                data-aos-delay="150"
                className="col-span-4 border border-purple/10 bg-main-gray rounded-xl p-5 md:p-[50px] hover:bg-purple transition-all duration-300 relative group"
              >
                <div className="flex gap-2 py-2 px-4 bg-orange rounded-3xl w-fit absolute top-2.5 right-2.5">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_460_24798)">
                      <path
                        d="M6.49956 7.1091L0.0322266 4.9542C0.0850377 4.82014 0.204878 4.72244 0.347062 4.70233L4.34649 4.11328L6.49956 7.1091Z"
                        fill="white"
                      />
                      <path
                        d="M6.49966 7.10889V10.8402L2.92272 12.7495C2.7846 12.8226 2.62028 12.8107 2.49414 12.717L6.49966 7.10889Z"
                        fill="white"
                      />
                      <path
                        d="M6.50012 7.10901L2.4944 12.7169C2.3707 12.6257 2.30753 12.4693 2.33414 12.3129L3.01642 8.27106L6.50012 7.10901Z"
                        fill="white"
                      />
                      <path
                        d="M6.50002 7.109L3.01652 8.27105L0.123887 5.40686C0.0123738 5.29717 -0.0284533 5.13244 0.0202954 4.98437C0.0245609 4.97421 0.026389 4.96385 0.0326857 4.9541L6.50002 7.109Z"
                        fill="white"
                      />
                      <path
                        d="M6.49975 0.203125V7.1092L4.34668 4.11318L6.13617 0.43265C6.20319 0.292295 6.34538 0.203125 6.49975 0.203125Z"
                        fill="white"
                      />
                      <path
                        d="M8.65307 4.113L6.5 7.10902V0.202942C6.65437 0.202942 6.79656 0.292112 6.86358 0.432467L8.65307 4.113Z"
                        fill="white"
                      />
                      <path
                        d="M12.9673 4.9541L6.5 7.10899L8.65307 4.11298L12.6525 4.70202C12.7947 4.72234 12.9145 4.81983 12.9673 4.9541Z"
                        fill="white"
                      />
                      <path
                        d="M12.878 5.40686L9.9835 8.27105L6.5 7.109L12.9673 4.9541C12.9734 4.96405 12.9755 4.97441 12.9797 4.98437C13.0283 5.13264 12.9876 5.29717 12.878 5.40686Z"
                        fill="white"
                      />
                      <path
                        d="M10.5055 12.7169L6.5 7.10901L9.98351 8.27106L10.666 12.3129C10.6924 12.4695 10.6294 12.6257 10.5055 12.7169Z"
                        fill="white"
                      />
                      <path
                        d="M10.5055 12.7169C10.3796 12.8106 10.2151 12.8228 10.0771 12.7494L6.5 10.8403V7.10901L10.5055 12.7169Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_460_24798">
                        <rect width="13" height="13" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_460_24798)">
                      <path
                        d="M6.49956 7.1091L0.0322266 4.9542C0.0850377 4.82014 0.204878 4.72244 0.347062 4.70233L4.34649 4.11328L6.49956 7.1091Z"
                        fill="white"
                      />
                      <path
                        d="M6.49966 7.10889V10.8402L2.92272 12.7495C2.7846 12.8226 2.62028 12.8107 2.49414 12.717L6.49966 7.10889Z"
                        fill="white"
                      />
                      <path
                        d="M6.50012 7.10901L2.4944 12.7169C2.3707 12.6257 2.30753 12.4693 2.33414 12.3129L3.01642 8.27106L6.50012 7.10901Z"
                        fill="white"
                      />
                      <path
                        d="M6.50002 7.109L3.01652 8.27105L0.123887 5.40686C0.0123738 5.29717 -0.0284533 5.13244 0.0202954 4.98437C0.0245609 4.97421 0.026389 4.96385 0.0326857 4.9541L6.50002 7.109Z"
                        fill="white"
                      />
                      <path
                        d="M6.49975 0.203125V7.1092L4.34668 4.11318L6.13617 0.43265C6.20319 0.292295 6.34538 0.203125 6.49975 0.203125Z"
                        fill="white"
                      />
                      <path
                        d="M8.65307 4.113L6.5 7.10902V0.202942C6.65437 0.202942 6.79656 0.292112 6.86358 0.432467L8.65307 4.113Z"
                        fill="white"
                      />
                      <path
                        d="M12.9673 4.9541L6.5 7.10899L8.65307 4.11298L12.6525 4.70202C12.7947 4.72234 12.9145 4.81983 12.9673 4.9541Z"
                        fill="white"
                      />
                      <path
                        d="M12.878 5.40686L9.9835 8.27105L6.5 7.109L12.9673 4.9541C12.9734 4.96405 12.9755 4.97441 12.9797 4.98437C13.0283 5.13264 12.9876 5.29717 12.878 5.40686Z"
                        fill="white"
                      />
                      <path
                        d="M10.5055 12.7169L6.5 7.10901L9.98351 8.27106L10.666 12.3129C10.6924 12.4695 10.6294 12.6257 10.5055 12.7169Z"
                        fill="white"
                      />
                      <path
                        d="M10.5055 12.7169C10.3796 12.8106 10.2151 12.8228 10.0771 12.7494L6.5 10.8403V7.10901L10.5055 12.7169Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_460_24798">
                        <rect width="13" height="13" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_460_24798)">
                      <path
                        d="M6.49956 7.1091L0.0322266 4.9542C0.0850377 4.82014 0.204878 4.72244 0.347062 4.70233L4.34649 4.11328L6.49956 7.1091Z"
                        fill="white"
                      />
                      <path
                        d="M6.49966 7.10889V10.8402L2.92272 12.7495C2.7846 12.8226 2.62028 12.8107 2.49414 12.717L6.49966 7.10889Z"
                        fill="white"
                      />
                      <path
                        d="M6.50012 7.10901L2.4944 12.7169C2.3707 12.6257 2.30753 12.4693 2.33414 12.3129L3.01642 8.27106L6.50012 7.10901Z"
                        fill="white"
                      />
                      <path
                        d="M6.50002 7.109L3.01652 8.27105L0.123887 5.40686C0.0123738 5.29717 -0.0284533 5.13244 0.0202954 4.98437C0.0245609 4.97421 0.026389 4.96385 0.0326857 4.9541L6.50002 7.109Z"
                        fill="white"
                      />
                      <path
                        d="M6.49975 0.203125V7.1092L4.34668 4.11318L6.13617 0.43265C6.20319 0.292295 6.34538 0.203125 6.49975 0.203125Z"
                        fill="white"
                      />
                      <path
                        d="M8.65307 4.113L6.5 7.10902V0.202942C6.65437 0.202942 6.79656 0.292112 6.86358 0.432467L8.65307 4.113Z"
                        fill="white"
                      />
                      <path
                        d="M12.9673 4.9541L6.5 7.10899L8.65307 4.11298L12.6525 4.70202C12.7947 4.72234 12.9145 4.81983 12.9673 4.9541Z"
                        fill="white"
                      />
                      <path
                        d="M12.878 5.40686L9.9835 8.27105L6.5 7.109L12.9673 4.9541C12.9734 4.96405 12.9755 4.97441 12.9797 4.98437C13.0283 5.13264 12.9876 5.29717 12.878 5.40686Z"
                        fill="white"
                      />
                      <path
                        d="M10.5055 12.7169L6.5 7.10901L9.98351 8.27106L10.666 12.3129C10.6924 12.4695 10.6294 12.6257 10.5055 12.7169Z"
                        fill="white"
                      />
                      <path
                        d="M10.5055 12.7169C10.3796 12.8106 10.2151 12.8228 10.0771 12.7494L6.5 10.8403V7.10901L10.5055 12.7169Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_460_24798">
                        <rect width="13" height="13" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h1 className="pb-4 font-semibold transition-all duration-300 text-18 text-main-black group-hover:text-white">
                  Standard Plan
                </h1>
                <span className="font-semibold transition-all duration-300 text-48 text-purple font-inter group-hover:text-white">
                  $49.00
                </span>
                <span className="text-base leading-[30px] text-paragraph font-normal group-hover:text-white transition-all duration-300">
                  / per monthly
                </span>
                <p className="pt-4 pb-8 transition-all duration-300 text-paragraph group-hover:text-white">
                  Ideal plan for individual creators
                </p>
                <Link href="/pricing">
                  <div className="home-two-btn-white group/btn">
                    <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover/btn:text-white font-inter text-purple">
                      Choose This Package
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
                        className="transition-all duration-300 group-hover/btn:stroke-white stroke-purple"
                        d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <ul className="flex flex-col gap-4 mt-9">
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      Subscription-Based Pricing
                    </span>
                  </li>
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      Pay-Per-Use Based Pricing
                    </span>
                  </li>
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      10,000 Monthly Word Limit
                    </span>
                  </li>
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      10+ Languages trasnlations
                    </span>
                  </li>
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      All types of content
                    </span>
                  </li>
                </ul>
              </div>
              {/* <!-- single card end  --> */}
              {/* <!-- single card  start --> */}
              <div className="group col-span-4 border border-purple/10 bg-main-gray rounded-xl p-5 md:p-[50px] hover:bg-purple transition-all duration-300">
                <h1 className="pb-4 font-semibold transition-all duration-300 text-18 text-main-black group-hover:text-white">
                  Diamond Plan
                </h1>
                <span className="font-semibold transition-all duration-300 text-48 text-purple font-inter group-hover:text-white">
                  $98.00
                </span>
                <span className="text-base leading-[30px] text-paragraph font-normal group-hover:text-white transition-all duration-300">
                  / per monthly
                </span>
                <p className="pt-4 pb-8 transition-all duration-300 text-paragraph group-hover:text-white">
                  Ideal plan for individual creators
                </p>
                <Link href="/pricing">
                  <div className="home-two-btn-white group/btn">
                    <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover/btn:text-white font-inter text-purple">
                      Choose This Package
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
                        className="transition-all duration-300 group-hover/btn:stroke-white stroke-purple"
                        d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <ul className="flex flex-col gap-4 mt-9">
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      Subscription-Based Pricing
                    </span>
                  </li>
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      Pay-Per-Use Based Pricing
                    </span>
                  </li>
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      10,000 Monthly Word Limit
                    </span>
                  </li>
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      10+ Languages trasnlations
                    </span>
                  </li>
                  <li className="flex gap-3 items-center text-[#4A7DFF] group-hover:text-white transition-all duration-300">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium transition-all duration-300 sm:text-18 text-paragraph group-hover:text-white">
                      All types of content
                    </span>
                  </li>
                </ul>
              </div>
              {/* <!-- single card end  --> */}
            </div>
          </div>
        </div>
        <div className="absolute z-10 shape-1 left-40 top-96">
          <img src="/assets/images/home-four/shape-1.webp" alt="" />
        </div>
        <div className="absolute z-10 shape-2 right-96 top-96">
          <img src="/assets/images/home-four/shape-2.webp" alt="" />
        </div>
        <div className="shape-3 absolute left-96 top-[550px] z-10">
          <img src="/assets/images/home-four/shape-3.webp" alt="" />
        </div>
        <div className="shape-4 absolute right-96 top-[550px] z-10">
          <img src="/assets/images/home-four/shape-4.webp" alt="" />
        </div>
      </div>
    </section>
  );
}
