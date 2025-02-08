import React from "react";
import ContactMap from "./ContactMap";

export default function ContactForm() {
  return (
    <section className="pt-16 md:pt-[130px]">
      <div className="theme-container w-full mx-auto grid grid-cols-7 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">
        {/* <!-- address start  --> */}
        <div className="col-span-7 lg:col-span-5">
          <h1 className="font-semibold text-main-black text-[35px]">
            Contact Us
          </h1>
          <p className="text-paragraph mt-[30px]">
            We peel back the layers uncertainty, uncovering hidden truths that
            lie beneath the surface of our reality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[70px] mt-10">
            <div className="col-span-1">
              <h1 className="flex gap-2.5">
                <svg
                  width="25"
                  height="30"
                  viewBox="0 0 25 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 0C7.71 0 3 4.71053 3 10.5C3 16.2895 7.71 21 13.5 21C19.29 21 24 16.2895 24 10.5C24 4.71053 19.29 0 13.5 0ZM13.5 20C8.26148 20 4.00002 15.7385 4.00002 10.5C4.00002 5.26154 8.26154 1.00002 13.5 1.00002C18.7385 1.00002 23 5.26148 23 10.5C23 15.7385 18.7385 20 13.5 20Z"
                    fill="#794AFF"
                  />
                  <path
                    d="M15.3483 10.6184C15.3023 10.273 15.0918 9.96541 14.7843 9.79543C14.4778 9.62545 14.1213 9.61092 13.8073 9.75441V9.75494C12.9978 10.124 12.0308 9.80943 11.6058 9.03646C10.9748 7.88744 9.91182 7.61199 9.8943 7.60848C8.52877 7.18449 7.92027 6.88549 7.65279 6.71545C7.71877 6.69348 7.8018 6.66893 7.90527 6.64496C8.25578 6.56193 8.63377 6.52894 9.02928 6.55045C11.0323 6.64297 12.0443 5.22242 12.3028 4.45197C12.6673 3.36447 11.6843 1.42197 11.2448 0.637461L11.0523 0.293457L10.6728 0.400977C7.07676 1.41547 4.26426 4.27748 3.33227 7.87045L3.23828 8.23144L3.55727 8.42393C4.47977 8.98191 5.40977 8.94594 5.60025 8.93094C6.09725 8.93492 6.48473 9.08293 6.78473 9.38445C7.4582 10.0604 7.5257 11.3364 7.52371 11.8535C7.52172 12.38 7.56971 12.852 7.67119 13.297C8.2777 15.951 10.0717 16.177 10.6647 16.177C10.7242 16.177 10.7717 16.175 10.8047 16.172C11.6487 16.165 12.4062 15.697 12.7852 14.9455C12.9997 14.5205 13.3332 14.153 13.7487 13.883C15.3773 12.8255 15.4498 11.3834 15.3483 10.6184ZM13.2043 13.0445C12.6408 13.4104 12.1873 13.9119 11.8933 14.4949C11.6823 14.9124 11.2588 15.1719 10.7873 15.1719L10.7168 15.1769C10.6548 15.1874 9.17084 15.3694 8.64684 13.0739C8.56234 12.7044 8.52233 12.3064 8.52432 11.8569C8.52731 11.0599 8.39781 9.58643 7.49383 8.67846C6.99936 8.18246 6.35582 7.93098 5.58033 7.93098L5.5283 7.93396C5.5218 7.93496 5.00031 7.98096 4.40828 7.73697C5.30828 4.79445 7.61775 2.44596 10.5618 1.47945C11.0943 2.51094 11.5088 3.67244 11.3538 4.13346C11.3493 4.14846 10.8278 5.64793 9.07979 5.55148C8.58877 5.52846 8.11727 5.56701 7.67529 5.67148C7.38479 5.73998 6.49979 5.94846 6.47582 6.63348C6.45531 7.22 6.97029 7.74746 9.62084 8.57C9.64885 8.5775 10.3158 8.76447 10.7293 9.51799C11.4043 10.748 12.9388 11.2525 14.2228 10.664C14.2468 10.6539 14.2733 10.6555 14.3003 10.6705C14.3158 10.6785 14.3508 10.703 14.3573 10.75C14.4828 11.694 14.0948 12.466 13.2043 13.0445Z"
                    fill="#794AFF"
                  />
                  <path
                    d="M23.6394 7.73814L23.5254 7.31164L23.0884 7.37117C20.9229 7.66719 19.9054 7.29418 19.5684 7.11916C19.0444 6.84816 18.4694 6.82215 17.9929 7.05113C17.3404 7.36162 16.6099 8.15861 16.8374 10.2167C16.8478 10.2792 17.1093 11.7577 18.7378 12.5792C19.2423 12.8337 19.5088 13.3882 19.3858 13.9276C19.0148 15.5561 19.3768 16.8871 20.4338 17.7771L20.7954 18.0816L21.1199 17.7382C22.9769 15.7706 23.9999 13.1937 23.9999 10.4812C23.9999 9.55566 23.8785 8.63264 23.6394 7.73814ZM20.7399 16.6631C20.2504 16.0396 20.1229 15.1971 20.3619 14.1501C20.5869 13.1611 20.105 12.1481 19.189 11.6861C18.029 11.1006 17.8325 10.0916 17.8289 10.0801C17.7405 9.28115 17.7725 8.26361 18.4244 7.95312C18.5039 7.91516 18.5939 7.89611 18.6889 7.89611C18.8229 7.89611 18.9674 7.93361 19.1094 8.00709C19.5985 8.2601 20.7054 8.63158 22.7754 8.4156C22.9244 9.09459 22.9999 9.78658 22.9999 10.4811C23 12.7621 22.2009 14.9381 20.7399 16.6631Z"
                    fill="#794AFF"
                  />
                  <path
                    d="M20.2104 2.42473C19.4584 1.79924 18.6219 1.28174 17.7229 0.886699L17.4395 0.761719L16.9855 1.1407C16.457 1.5542 14.8475 2.81168 15.588 4.24019L15.6545 4.33922C15.9389 4.6657 16.547 5.0932 17.3029 5.0932C17.6669 5.0932 18.065 4.99371 18.4769 4.73619C18.7394 4.57271 18.9734 4.34771 19.2129 4.02867C19.3369 3.86367 19.5719 3.60867 19.9544 3.34816L20.765 2.88615L20.2104 2.42473ZM18.4139 3.42773C18.2504 3.64576 18.1024 3.79172 17.9484 3.88775C17.1924 4.35873 16.6074 3.87873 16.4468 3.72123C16.3518 3.50525 16.2603 2.98072 17.5988 1.92973C18.1053 2.17225 18.5888 2.45871 19.0428 2.78525C18.7384 3.03521 18.5379 3.26326 18.4139 3.42773Z"
                    fill="#794AFF"
                  />
                  <path
                    d="M16.2591 20.0127C16.0486 19.5727 15.8966 19.0637 15.8076 18.5002C15.6291 17.3712 14.6576 16.5518 13.4986 16.5518C11.7111 16.5518 10.2556 17.9983 10.2401 19.7817L10.1641 20.4658L10.5685 20.5828C11.524 20.8597 12.5095 20.9998 13.499 20.9998C14.3096 20.9998 15.125 20.9043 15.9231 20.7153L16.5271 20.5723L16.2591 20.0127ZM11.2416 19.7272C11.2856 18.5203 12.2811 17.5517 13.4986 17.5517C14.1521 17.5517 14.7201 18.0267 14.8196 18.6567C14.8871 19.0832 14.9866 19.4857 15.1171 19.8603C13.8246 20.0837 12.5076 20.0367 11.2416 19.7272Z"
                    fill="#794AFF"
                  />
                  <path
                    d="M23.3785 19.1728C23.1975 18.9638 22.8815 18.9409 22.673 19.1219C20.4685 21.0284 18.189 22.9999 13.4999 22.9999C6.60744 22.9999 0.999961 17.3924 0.999961 10.4999C0.999961 7.32993 1.99547 4.50389 3.87844 2.3269C4.05896 2.11789 4.03594 1.8019 3.82746 1.6219C3.61898 1.4409 3.30246 1.4644 3.12193 1.67287C1.07953 4.03385 0 7.08635 0 10.4998C0 17.9438 6.05602 23.9999 13.5 23.9999C18.5615 23.9999 20.984 21.9048 23.3275 19.8778C23.536 19.6978 23.5595 19.3818 23.3785 19.1728Z"
                    fill="#794AFF"
                  />
                  <path
                    d="M4.85357 2.64658L2.85359 0.646602C2.65807 0.451133 2.34207 0.451133 2.1466 0.646602C1.95113 0.842129 1.95113 1.15812 2.1466 1.35359L4.14658 3.35357C4.24408 3.45107 4.37211 3.50006 4.50008 3.50006C4.62811 3.50006 4.75607 3.45107 4.85357 3.35357C5.0491 3.1581 5.0491 2.84205 4.85357 2.64658Z"
                    fill="#794AFF"
                  />
                  <path
                    d="M24.3536 20.1467L22.3536 18.1466C22.1581 17.9512 21.8421 17.9511 21.6466 18.1466C21.4511 18.3422 21.4511 18.6581 21.6466 18.8536L23.6466 20.8536C23.7441 20.9511 23.8722 21.0001 24.0001 21.0001C24.1282 21.0001 24.2561 20.9511 24.3536 20.8536C24.5491 20.6581 24.5491 20.3421 24.3536 20.1467Z"
                    fill="#794AFF"
                  />
                  <path
                    d="M18 27H8.99998C8.724 27 8.5 27.2235 8.5 27.5V29.5C8.5 29.7765 8.724 29.9999 8.99998 29.9999H18C18.276 29.9999 18.5 29.7765 18.5 29.5V27.5C18.5 27.2235 18.276 27 18 27ZM17.5 29H9.50002V28H17.5V29Z"
                    fill="#794AFF"
                  />
                  <path
                    d="M17.4999 27C15.5699 27 13.9999 25.4295 13.9999 23.5C13.9999 23.2235 13.7759 23 13.4999 23C13.224 23 13 23.2235 13 23.5C13 25.4295 11.4299 27 9.49998 27C9.224 27 9 27.2234 9 27.4999C9 27.7764 9.224 27.9999 9.49998 27.9999H17.5C17.7759 27.9999 17.9999 27.7764 17.9999 27.4999C17.9999 27.2234 17.7759 27 17.4999 27ZM12.3254 27C12.8099 26.6084 13.2114 26.1179 13.4999 25.5604C13.7884 26.1179 14.1899 26.6084 14.6744 27H12.3254Z"
                    fill="#794AFF"
                  />
                </svg>
                <span className="font-medium font-inter text-22 text-main-black">
                  Malaysia
                </span>
              </h1>
              <p className="max-w-[209px] text-paragraph mt-5">
                Kuala Lumpur, Malaysia
              </p>
              <p className="mt-1 text-paragraph">sales@deeptronix.com.my</p>
              <p className="mt-1 text-paragraph">(+60) 14-2273677</p>
            </div>
            
          </div>
          <hr className="border-purple/10 mt-11 mb-[50px]" />
          <div className="flex items-center gap-[15px]">
            <h1 className="font-semibold text-18 text-main-black pr-2.5">
              Follow Us
            </h1>
            <a
              href="#"
              target="blank"
              aria-label="facebook"
              className="w-10 h-10 text-[#CAB7FF] hover:text-white rounded-full flex justify-center items-center border border-purple/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <svg
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6667 0H8.55556C5.79413 0 3.55556 2.23857 3.55556 5V6.22222H0V9.77778H3.55556V16H7.11111V9.77778H10.6667V6.22222H7.11111V4.55556C7.11111 4.00327 7.55883 3.55556 8.11111 3.55556H10.6667V0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#"
              aria-label="twitter"
              target="blank"
              className="w-10 h-10 text-[#CAB7FF] hover:text-white rounded-full flex justify-center items-center border border-purple/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7642 0C10.5722 0 8.7953 1.86585 8.7953 4.1675C8.7953 4.5153 8.83587 4.85315 8.91232 5.17611C6.80469 5.17611 3.63013 4.74999 0.978868 2.09376C0.626315 1.74054 -0.0237835 1.9767 0.000670803 2.47516C0.393588 10.484 3.82353 12.8202 5.58986 12.9656C4.44926 14.0921 2.79242 14.9813 1.1252 15.3804C0.685191 15.4857 0.576494 15.9674 1.00675 16.1073C2.19973 16.4953 3.90729 16.6448 4.82642 16.67C11.3286 16.67 16.6134 11.1972 16.731 4.3991C17.5847 3.84394 18.1315 2.63855 18.4388 1.78464C18.5136 1.57667 18.1728 1.33436 17.9687 1.41931C17.331 1.68479 16.5214 1.74773 15.8318 1.52302C15.1039 0.593104 14 0 12.7642 0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#"
              aria-label="instagram"
              target="blank"
              className="w-10 h-10 text-[#CAB7FF] hover:text-white rounded-full flex justify-center items-center border border-purple/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 0C2.23858 0 0 2.23858 0 5V11.33C0 14.0914 2.23858 16.33 5 16.33H11.33C14.0914 16.33 16.33 14.0914 16.33 11.33V5C16.33 2.23858 14.0914 0 11.33 0H5ZM13.0645 4.08222C13.5155 4.08222 13.881 3.71666 13.881 3.26572C13.881 2.81478 13.5155 2.44922 13.0645 2.44922C12.6136 2.44922 12.248 2.81478 12.248 3.26572C12.248 3.71666 12.6136 4.08222 13.0645 4.08222ZM12.247 8.16551C12.247 10.4202 10.4192 12.248 8.16453 12.248C5.90983 12.248 4.08203 10.4202 4.08203 8.16551C4.08203 5.91081 5.90983 4.08301 8.16453 4.08301C10.4192 4.08301 12.247 5.91081 12.247 8.16551ZM8.16532 10.6138C9.51814 10.6138 10.6148 9.51717 10.6148 8.16434C10.6148 6.81152 9.51814 5.71484 8.16532 5.71484C6.8125 5.71484 5.71582 6.81152 5.71582 8.16434C5.71582 9.51717 6.8125 10.6138 8.16532 10.6138Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#"
              aria-label="dribble"
              target="blank"
              className="w-10 h-10 text-[#CAB7FF] hover:text-white rounded-full flex justify-center items-center border border-purple/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-purple before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.0787061 9.30823C0.479084 12.1658 2.35861 14.5492 4.91845 15.6594C5.03048 13.3562 5.50604 11.1434 6.2916 9.07041C5.45422 8.9105 4.5871 8.82648 3.69861 8.82648C2.44115 8.82648 1.22661 8.99477 0.0787061 9.30823ZM6.12757 16.0739C6.77863 16.2411 7.46109 16.33 8.1643 16.33C10.5078 16.33 12.6208 15.3427 14.1098 13.7613C12.4845 11.6965 10.1761 10.1288 7.49338 9.35723C6.67698 11.4629 6.2012 13.7215 6.12757 16.0739ZM14.8969 12.7858C15.8005 11.4718 16.3293 9.88016 16.3293 8.165C16.3293 8.02119 16.3256 7.87824 16.3182 7.73626C15.4488 7.89372 14.5515 7.97608 13.6344 7.97608C11.8389 7.97608 10.12 7.66043 8.53731 7.0839C8.33792 7.4571 8.14977 7.83648 7.97327 8.22164C10.7455 9.0492 13.1519 10.6609 14.8969 12.7858ZM16.1634 6.51947C15.7389 4.44499 14.5277 2.65708 12.8551 1.48108C11.4192 2.82433 10.1729 4.34473 9.15604 6.00404C10.5505 6.48713 12.0589 6.75133 13.6344 6.75133C14.5004 6.75133 15.346 6.67152 16.1634 6.51947ZM11.7599 0.832253C10.675 0.299297 9.4546 0 8.1643 0C6.27362 0 4.53304 0.642623 3.14905 1.72136C4.39853 3.34118 6.06515 4.66232 8.00312 5.54348C9.03743 3.81982 10.3032 2.23688 11.7599 0.832253ZM2.23946 2.54684C0.87291 3.98751 0.0262453 5.92618 -6.43421e-05 8.06238C1.1797 7.76185 2.41982 7.60173 3.69861 7.60173C4.7518 7.60173 5.77866 7.71034 6.76712 7.91649C6.96395 7.47512 7.17512 7.04087 7.40007 6.61427C5.35434 5.66603 3.58482 4.26501 2.23946 2.54684Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        {/* <!-- address end  --> */}
        {/* <!-- contact form start --> */}
        <div className="col-span-7">
          <div className="border border-purple/10 bg-main-gray rounded-[10px] p-4 md:p-[50px]">
            <h1 className="text-[30px] tracking-tight font-semibold text-main-black pb-6">
              Send Us Message
            </h1>
            <p className="text-paragraph mb-[30px]">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form
              action=""
              className="grid grid-cols-6 md:grid-cols-12 gap-[30px]"
            >
              <input
                type="text"
                placeholder="Full Name"
                className="col-span-6 h-[30px] focus:outline-none border-b border-purple/10 focus:border-purple bg-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                className="col-span-6 h-[30px] focus:outline-none border-b border-purple/10 focus:border-purple bg-transparent"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="col-span-6 h-[30px] focus:outline-none border-b border-purple/10 focus:border-purple bg-transparent"
              />
              <input
                type="email"
                placeholder="Subject"
                className="col-span-6 h-[30px] focus:outline-none border-b border-purple/10 focus:border-purple bg-transparent"
              />
              <textarea
                name=""
                placeholder="Comments"
                className="col-span-6 md:col-span-12 focus:outline-none border-b border-purple/10 focus:border-purple bg-transparent h-[83px]"
              ></textarea>

              <div className="col-span-6 md:col-span-12">
                <button className="home-two-btn-bg py-3 group bg-[#4A7DFF] border-[#4A7DFF] inline-flex">
                  <span className="text-base text-white group-hover:text-[#4A7DFF] transition-all duration-300 font-inter relative z-10">
                    Send Message
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
                      className="group-hover:stroke-[#4A7DFF] transition-all duration-300"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- contact-form end  --> */}
      </div>
      <ContactMap />
    </section>
  );
}
