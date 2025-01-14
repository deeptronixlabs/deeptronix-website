import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function AboutFive() {
  return (
    <section id="about" className="pb-[70px] sm:pb-[130px]">
      <div className="grid grid-cols-6 mx-auto theme-container lg:grid-cols-12">
        <div className="flex justify-center col-span-6 lg:block">
          <div className="relative w-fit">
            <div className="bg-green-dark p-6 rounded-2xl sm:absolute z-20 bottom-8 w-full sm:w-[155px] -right-[30px] mt-5 sm:mt-0 max-w-full">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_460_41269)">
                  <path
                    d="M21.5881 15.7841L19.7693 14.2471L20.0046 11.8773C20.0305 11.6156 19.908 11.3667 19.6848 11.2276C19.4617 11.0885 19.1842 11.0881 18.9606 11.2267L16.9367 12.4814L14.7557 11.5256C14.5148 11.4199 14.2403 11.4595 14.0389 11.6288C13.8376 11.7981 13.7515 12.0621 13.8143 12.3174L14.3822 14.6299L12.7993 16.4086C12.6243 16.6051 12.5771 16.8785 12.6758 17.1224C12.7746 17.3661 12.9989 17.5296 13.2612 17.5488L15.6361 17.7233L16.8388 19.7788C16.9632 19.9913 17.1863 20.1181 17.4295 20.1181C17.446 20.1181 17.4627 20.1175 17.4793 20.1164C17.7416 20.0978 17.9663 19.935 18.0657 19.6914L18.9656 17.4867L21.2923 16.978C21.5491 16.9217 21.7479 16.7281 21.8111 16.4729C21.8743 16.2178 21.7889 15.9538 21.5881 15.7841ZM18.4696 16.401C18.249 16.4493 18.0664 16.603 17.9811 16.8119L17.3538 18.3489L16.5151 16.9156C16.4011 16.7212 16.1989 16.5952 15.9736 16.5785L14.318 16.4568L15.4218 15.2164C15.5718 15.0478 15.6291 14.8163 15.5754 14.5971L15.1794 12.9849L16.6995 13.6511C16.9062 13.742 17.1443 13.7251 17.3366 13.606L18.7476 12.7313L18.5837 14.3832C18.5614 14.6079 18.651 14.8291 18.8235 14.9749L20.0914 16.0464L18.4696 16.401Z"
                    fill="white"
                  />
                  <path
                    d="M38.4343 30.2221L36.4902 28.5048C35.9943 28.0669 35.2386 28.0578 34.7323 28.4835L34.6451 28.5568C34.5591 28.2471 34.4021 27.954 34.1717 27.7059C33.8902 27.4027 33.5328 27.1953 33.1391 27.102C33.3662 26.4045 33.2194 25.6072 32.686 25.0326C32.3066 24.6239 31.7909 24.3875 31.2337 24.367C31.2169 24.3664 31.2002 24.3666 31.1835 24.3664C31.2091 23.8254 31.0264 23.2751 30.6298 22.8478C30.2551 22.4442 29.7473 22.209 29.1979 22.1834C29.2474 21.6159 29.0666 21.0304 28.6495 20.5811C28.2702 20.1724 27.7544 19.936 27.1972 19.9155C26.6398 19.8945 26.1081 20.0925 25.6996 20.472L25.4227 20.7292C25.0205 20.4389 24.5394 20.274 24.0284 20.2572C23.964 20.255 23.9 20.256 23.8362 20.2585L24.0437 19.566C24.4159 18.3242 24.6474 16.0728 24.6405 16.1936C24.6606 16.2033 24.6803 16.2134 24.7009 16.2225C24.9863 16.3499 25.2939 16.4131 25.6002 16.4131C25.9514 16.4131 26.3009 16.3299 26.6133 16.1646C27.2635 15.8203 27.725 15.1008 27.7617 14.374C27.7966 13.6824 27.4709 13.0717 26.8447 12.6542C26.5766 12.4757 26.2144 12.5481 26.0359 12.8161C25.8573 13.0842 25.9298 13.4463 26.1978 13.6249C26.4763 13.8105 26.6105 14.0427 26.5967 14.3151C26.5805 14.6356 26.358 14.9798 26.0675 15.1335C25.8012 15.2746 25.4596 15.2836 25.176 15.1571C24.9949 15.0764 24.7602 14.9046 24.6703 14.5449C24.4027 13.4739 25.0163 12.4109 25.7267 11.1801C27.0135 8.95065 28.6149 6.17619 25.2627 2.21401L23.8744 0.573068C23.5948 0.242521 23.2033 0.0410369 22.7719 0.00556815C22.3405 -0.0299006 21.9212 0.104943 21.5914 0.385412C20.6969 1.14596 20.2319 2.2976 20.3474 3.46596L20.4167 4.1669C20.4523 4.52635 20.3138 4.87948 20.0474 5.12119L20.7991 6.01494C21.3599 5.5251 21.6509 4.79447 21.5775 4.05213L21.5082 3.35119C21.4303 2.56338 21.7438 1.7869 22.3469 1.27408C22.4389 1.19588 22.5555 1.15807 22.6762 1.16815C22.7966 1.17799 22.9058 1.23424 22.9838 1.32643L24.3721 2.96737C27.1944 6.30338 25.9907 8.38901 24.7163 10.5969C24.5169 10.9423 24.316 11.2909 24.1342 11.6443C23.6523 9.98807 22.8456 8.44823 21.7303 7.12221L19.0608 3.94822L19.0758 3.93565C19.29 3.75549 19.4212 3.50276 19.4453 3.22393C19.4694 2.94502 19.3834 2.67354 19.2033 2.4594L18.3503 1.44526C18.1702 1.23104 17.9174 1.09979 17.6386 1.07572C17.3598 1.05174 17.0883 1.13752 16.874 1.31768L3.39453 12.6546C2.95242 13.0264 2.89523 13.6886 3.26703 14.1309L4.12 15.145C4.30015 15.3592 4.55289 15.4905 4.83179 15.5146C4.86257 15.5172 4.8932 15.5185 4.92367 15.5185C5.16984 15.5185 5.40578 15.4328 5.59625 15.2725L5.61132 15.2598L6.6139 16.4519C6.33156 16.6694 5.96359 16.7442 5.61828 16.6496L4.93914 16.4632C3.80711 16.1524 2.59343 16.4167 1.69296 17.1702C1.36101 17.4481 1.15734 17.8385 1.11961 18.2698C1.08179 18.701 1.21445 19.1209 1.49312 19.4522L2.87664 21.0971C6.21718 25.0691 9.22195 23.9583 11.6363 23.0656C12.7259 22.6628 13.6941 22.305 14.5633 22.4305C14.7246 22.4759 14.8869 22.5188 15.0505 22.5583C15.0775 22.5689 15.1044 22.5797 15.1312 22.5914C15.4705 22.7405 15.6002 23.0009 15.6494 23.193C15.7262 23.4938 15.6598 23.8289 15.4759 24.0678C15.2754 24.3281 14.8986 24.4892 14.5799 24.4514C14.3091 24.4191 14.1028 24.2477 13.9668 23.9419C13.8359 23.6476 13.4913 23.5153 13.1968 23.646C12.9025 23.7769 12.77 24.1216 12.9009 24.416C13.2067 25.1036 13.7539 25.5276 14.4415 25.6097C14.5174 25.6188 14.5939 25.6232 14.6707 25.6232C15.3255 25.6231 15.9983 25.3011 16.3999 24.7795C16.8037 24.2553 16.9455 23.5542 16.7794 22.9042C16.7755 22.8893 16.7709 22.8749 16.7668 22.8602C17.2973 22.9199 17.8354 22.9514 18.3794 22.9514C18.962 22.9514 19.5514 22.9165 20.1437 22.8458L20.1954 22.8396C19.9298 23.1565 19.723 23.5207 19.5893 23.911L17.2966 29.5506L5.06671 38.9544C4.86875 39.1066 4.78961 39.3681 4.87007 39.6045C4.95046 39.841 5.1725 40 5.42226 40H19.2794C19.4368 40 19.5875 39.9364 19.6973 39.8238L20.4691 39.0314C20.6938 38.8006 20.689 38.4313 20.4582 38.2065C20.2274 37.9818 19.8581 37.9866 19.6334 38.2174L19.0334 38.8335H7.13773L18.1332 30.3791C18.1413 30.3728 18.1486 30.366 18.1562 30.3595C18.1615 30.355 18.1669 30.3507 18.1719 30.346C18.1905 30.329 18.2078 30.311 18.2237 30.2921C18.2269 30.2884 18.2298 30.2844 18.2328 30.2805C18.2473 30.2624 18.2606 30.2435 18.2727 30.224C18.275 30.2203 18.2775 30.2168 18.2797 30.2131C18.2934 30.1898 18.3053 30.1658 18.3156 30.1411C18.3163 30.1395 18.3173 30.138 18.318 30.1364L20.6767 24.3345C20.6812 24.3233 20.6855 24.312 20.6893 24.3006C20.8038 23.9596 21.0039 23.6482 21.2678 23.3998L22.943 21.8231C23.2307 21.5523 23.6016 21.4101 23.9898 21.4231C24.3563 21.4352 24.6932 21.5868 24.9384 21.8502L25.0007 21.9171L25.0008 21.9172L25.0009 21.9173L27.0499 24.1181L27.0501 24.1184L27.0503 24.1186L27.0504 24.1187C27.0505 24.1189 27.0506 24.119 27.0508 24.1192C27.0509 24.1193 27.0511 24.1195 27.0512 24.1196L27.3416 24.4314C27.4639 24.5628 27.5275 24.7364 27.5209 24.9202C27.5137 25.1175 27.4281 25.3021 27.2799 25.4399L26.9422 25.7537C26.7085 25.9707 26.3765 26.0117 26.1187 25.8803C26.1119 25.8767 26.1049 25.8736 26.098 25.8702C26.0381 25.837 25.9827 25.7942 25.9338 25.7417L25.0833 24.8267C24.7793 24.4998 24.364 24.3114 23.9139 24.2964C23.4527 24.2814 23.0109 24.4485 22.6713 24.7681C22.6397 24.7979 22.6117 24.8308 22.5878 24.8662C22.528 24.9546 22.4934 25.0582 22.4884 25.1656C22.4874 25.1871 22.4876 25.2088 22.4891 25.2305C22.4891 25.2313 22.4891 25.2321 22.4891 25.2328C22.4919 25.2771 22.4939 25.321 22.4951 25.3646C22.4957 25.3891 22.4956 25.4134 22.4958 25.4378C22.4959 25.4565 22.4962 25.4753 22.496 25.4939C22.4957 25.525 22.4946 25.5558 22.4934 25.5865C22.493 25.5977 22.4927 25.6089 22.4922 25.62C22.4905 25.6547 22.488 25.6892 22.4852 25.7233C22.4848 25.7278 22.4845 25.7323 22.4841 25.7367C22.4825 25.7514 22.4812 25.766 22.4806 25.7806C22.4262 26.3207 22.231 26.8039 21.89 27.2465C21.6934 27.5017 21.7409 27.8679 21.996 28.0645C22.2511 28.261 22.6174 28.2135 22.814 27.9584C23.016 27.6962 23.1817 27.42 23.3119 27.1311L28.2727 33.9162L28.1544 34.0157C28.0803 34.0411 28.0101 34.0816 27.9488 34.138C27.5366 34.5173 27.0319 34.7729 26.488 34.8785L22.8355 35.141C22.693 35.1513 22.5592 35.2135 22.4595 35.3158L21.5271 36.2731C21.3023 36.5039 21.3072 36.8732 21.538 37.098C21.6513 37.2084 21.7981 37.2634 21.9448 37.2634C22.0966 37.2634 22.2484 37.2045 22.3627 37.0871L23.1403 36.2886L26.6049 36.0397C26.6116 36.0392 26.618 36.0379 26.6246 36.0372C26.6397 36.2461 26.7022 36.4532 26.8172 36.6403L28.1758 38.8499C28.3812 39.1839 28.7209 39.4114 29.108 39.4739C29.1797 39.4855 29.2516 39.4912 29.323 39.4912C29.6377 39.4912 29.9448 39.3809 30.1893 39.1752L38.4094 32.2617C38.7095 32.0094 38.8843 31.6398 38.8891 31.2477C38.894 30.8554 38.7281 30.4817 38.4343 30.2221ZM11.2319 21.9716C8.84062 22.8556 6.58203 23.6906 3.76953 20.3464L2.38601 18.7015C2.30836 18.6091 2.27132 18.492 2.28187 18.3717C2.29242 18.2514 2.34921 18.1424 2.44187 18.0649C3.04898 17.5569 3.86734 17.3788 4.63062 17.5882L5.30976 17.7746C6.02507 17.9708 6.78968 17.8102 7.36593 17.346L8.28093 18.4339C9.3989 19.7632 10.7816 20.8239 12.3352 21.5829C11.9654 21.7006 11.597 21.8366 11.2319 21.9716ZM22.9262 19.2312L22.4858 20.7008C22.3658 20.7816 22.2511 20.8723 22.1434 20.9735L21.5854 21.4988L20.0055 21.6875C15.7587 22.1949 11.7091 20.6978 9.17359 17.6831L6.50414 14.5091L7.54625 13.6326C7.79281 13.4253 7.82453 13.0573 7.61718 12.8108C7.40992 12.5642 7.04187 12.5323 6.79539 12.7398L5.30711 13.9914L5.30687 13.9916L5.30664 13.9918L4.93632 14.3033L4.23617 13.4709L17.5341 2.28682L18.2343 3.11932L17.8645 3.43033C17.8643 3.43057 17.864 3.43072 17.8637 3.43088C17.8635 3.43104 17.8633 3.43135 17.863 3.43151L8.89906 10.9706C8.65257 11.178 8.62078 11.5459 8.82812 11.7924C9.03539 12.0389 9.40328 12.0705 9.64992 11.8634L18.1682 4.69901L20.8377 7.87299C23.3733 10.8879 24.154 15.134 22.9262 19.2312ZM32.6918 28.2131C32.9316 28.222 33.1536 28.3237 33.3168 28.4996C33.5951 28.7994 33.6332 29.2487 33.4169 29.5897L30.8756 31.7271C30.6019 31.7501 30.336 31.6492 30.1459 31.4444C29.8091 31.0816 29.8302 30.5124 30.1928 30.1754L30.561 29.8333C30.6283 29.7842 30.6934 29.7314 30.7553 29.6739L32.1777 28.3525C32.3298 28.2557 32.507 28.2071 32.6918 28.2131ZM30.5987 25.7203C30.7587 25.5979 30.9525 25.532 31.1555 25.532C31.1671 25.532 31.1787 25.5322 31.1904 25.5326C31.4362 25.5417 31.6637 25.646 31.831 25.8262C32.1762 26.198 32.1547 26.7815 31.783 27.1268L31.447 27.4389C31.3799 27.4878 31.3151 27.5404 31.2533 27.5978L29.8292 28.9208C29.6728 29.021 29.4902 29.0721 29.3008 29.0646C29.055 29.0555 28.8275 28.9513 28.6602 28.771C28.3376 28.4235 28.3355 27.8914 28.64 27.5414C28.6598 27.5242 28.6797 27.507 28.699 27.4891L30.5206 25.7967C30.5476 25.7717 30.5734 25.7463 30.5987 25.7203ZM27.5073 22.8977L26.2528 21.5503L26.4935 21.3266C26.6737 21.1592 26.9082 21.0737 27.154 21.0811C27.3998 21.0903 27.6273 21.1945 27.7946 21.3747C28.1398 21.7465 28.1182 22.33 27.7465 22.6754L27.5073 22.8977ZM27.7361 26.6084L28.0739 26.2945C28.4505 25.9446 28.6681 25.4715 28.6866 24.9625C28.7026 24.5205 28.5651 24.0982 28.2976 23.7569L28.4737 23.5932C28.6539 23.4259 28.888 23.3382 29.1342 23.3478C29.3799 23.3569 29.6074 23.4611 29.7748 23.6414C30.0975 23.989 30.0994 24.5214 29.7947 24.8715C29.7749 24.8885 29.7552 24.9056 29.736 24.9234L27.9144 26.6157C27.8874 26.6408 27.8613 26.6664 27.836 26.6925C27.699 26.7974 27.5369 26.86 27.3659 26.8757C27.4965 26.8026 27.6214 26.7149 27.7361 26.6084ZM23.6591 25.6296C23.6609 25.5856 23.6624 25.5417 23.6628 25.4974C23.6796 25.491 23.6968 25.4856 23.7141 25.4809C23.7662 25.4669 23.8204 25.4606 23.8751 25.4625C24.0124 25.4671 24.138 25.5235 24.229 25.6213L25.0795 26.5362C25.1666 26.6298 25.2613 26.7122 25.3619 26.7835C25.4555 27.0035 25.5851 27.2035 25.7491 27.38C26.1284 27.7887 26.6442 28.0251 27.2015 28.0457C27.2183 28.0463 27.2349 28.0464 27.2516 28.0467C27.2262 28.5874 27.4088 29.1377 27.8053 29.5648C28.0895 29.871 28.4503 30.0804 28.8477 30.1749C28.6155 30.8687 28.7592 31.6653 29.2909 32.2381C29.4394 32.3979 29.6106 32.5308 29.7969 32.6343L29.1675 33.1637L23.6591 25.6296ZM37.6586 31.3689L29.4384 38.2823C29.3836 38.3285 29.3242 38.3271 29.294 38.3222C29.2636 38.3173 29.207 38.2999 29.1694 38.2389L27.8109 36.0292C27.7638 35.9527 27.7795 35.8552 27.8483 35.7974L35.4826 29.3765C35.4829 29.3763 35.4826 29.3765 35.4829 29.3763C35.5161 29.3483 35.5574 29.3343 35.5987 29.3343C35.6414 29.3343 35.6841 29.3493 35.7177 29.3791L37.6619 31.0964C37.7156 31.1439 37.723 31.2026 37.7227 31.2335C37.7224 31.2642 37.7135 31.3228 37.6586 31.3689Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_460_41269">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <img
                src="/assets/images/home-six/shape-1.png"
                alt=""
                className="absolute right-2 top-bottom-moving"
              />
              <div className="flex items-center gap-2.5">
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

              <h1 className="text-18 text-white font-semibold tracking-tight max-w-[170px] min-h-[54px]">
                <CountUp start={0} end={25} /> + Awards Winning
              </h1>
            </div>
            <img
              src="/assets/images/home-six/about.png"
              alt=""
              className="mt-5 sm:mt-0"
            />
          </div>
        </div>
        <div className="col-span-6 mt-5 lg:mt-0">
          <h1 className="px-5 bg-orange/10 border border-orange/20 text-orange font-medium rounded-[30px] w-fit">
            About Company
          </h1>
          <h2 className="max-w-[747px] font-semibold text-24 sm:text-48 text-main-black mt-5">
            Propel Your Career & Expand your knowledge Any Level
          </h2>
          <p className="text-paragraph mt-9">
            Welcome to Lumina Learning Institute, where education meets
            innovation. Our institute is dedicated to providing high-quality
            online learning experiences to individuals seeking enhance their
            skills and knowledge in various fields wait a diverse range of
            courses
          </p>
          <ul className="mt-6 mb-10">
            <li className="flex gap-2.5 items-center">
              <div className="w-[18px] aspect-square rounded-full flex justify-center items-center bg-orange">
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.69951 0.208936C9.63384 0.142732 9.55572 0.0901832 9.46965 0.0543229C9.38357 0.0184625 9.29125 0 9.198 0C9.10476 0 9.01243 0.0184625 8.92636 0.0543229C8.84028 0.0901832 8.76216 0.142732 8.6965 0.208936L3.43421 5.47829L1.22334 3.26036C1.15516 3.1945 1.07468 3.14271 0.986488 3.10796C0.898297 3.0732 0.804124 3.05616 0.709346 3.0578C0.614568 3.05944 0.52104 3.07973 0.434104 3.11752C0.347168 3.1553 0.268526 3.20984 0.202667 3.27802C0.136808 3.34619 0.0850229 3.42668 0.0502678 3.51487C0.0155128 3.60306 -0.00153175 3.69723 0.000108014 3.79201C0.00174778 3.88679 0.0220396 3.98032 0.0598246 4.06725C0.0976096 4.15419 0.152148 4.23283 0.220326 4.29869L2.9327 7.01106C2.99836 7.07727 3.07649 7.12982 3.16256 7.16568C3.24864 7.20154 3.34096 7.22 3.43421 7.22C3.52745 7.22 3.61978 7.20154 3.70585 7.16568C3.79193 7.12982 3.87005 7.07727 3.93571 7.01106L9.69951 1.24727C9.77121 1.18112 9.82843 1.10085 9.86756 1.01149C9.9067 0.922141 9.92691 0.82565 9.92691 0.728102C9.92691 0.630554 9.9067 0.534063 9.86756 0.444711C9.82843 0.355358 9.77121 0.27508 9.69951 0.208936Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="">Write and translate to all languages</span>
            </li>
            <li className="flex gap-2.5 items-center mt-2">
              <div className="w-[18px] aspect-square rounded-full flex justify-center items-center bg-orange">
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.69951 0.208936C9.63384 0.142732 9.55572 0.0901832 9.46965 0.0543229C9.38357 0.0184625 9.29125 0 9.198 0C9.10476 0 9.01243 0.0184625 8.92636 0.0543229C8.84028 0.0901832 8.76216 0.142732 8.6965 0.208936L3.43421 5.47829L1.22334 3.26036C1.15516 3.1945 1.07468 3.14271 0.986488 3.10796C0.898297 3.0732 0.804124 3.05616 0.709346 3.0578C0.614568 3.05944 0.52104 3.07973 0.434104 3.11752C0.347168 3.1553 0.268526 3.20984 0.202667 3.27802C0.136808 3.34619 0.0850229 3.42668 0.0502678 3.51487C0.0155128 3.60306 -0.00153175 3.69723 0.000108014 3.79201C0.00174778 3.88679 0.0220396 3.98032 0.0598246 4.06725C0.0976096 4.15419 0.152148 4.23283 0.220326 4.29869L2.9327 7.01106C2.99836 7.07727 3.07649 7.12982 3.16256 7.16568C3.24864 7.20154 3.34096 7.22 3.43421 7.22C3.52745 7.22 3.61978 7.20154 3.70585 7.16568C3.79193 7.12982 3.87005 7.07727 3.93571 7.01106L9.69951 1.24727C9.77121 1.18112 9.82843 1.10085 9.86756 1.01149C9.9067 0.922141 9.92691 0.82565 9.92691 0.728102C9.92691 0.630554 9.9067 0.534063 9.86756 0.444711C9.82843 0.355358 9.77121 0.27508 9.69951 0.208936Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="">
                Crafting quality content has been very easier
              </span>
            </li>
            <li className="flex gap-2.5 items-center mt-2">
              <div className="w-[18px] aspect-square rounded-full flex justify-center items-center bg-orange">
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.69951 0.208936C9.63384 0.142732 9.55572 0.0901832 9.46965 0.0543229C9.38357 0.0184625 9.29125 0 9.198 0C9.10476 0 9.01243 0.0184625 8.92636 0.0543229C8.84028 0.0901832 8.76216 0.142732 8.6965 0.208936L3.43421 5.47829L1.22334 3.26036C1.15516 3.1945 1.07468 3.14271 0.986488 3.10796C0.898297 3.0732 0.804124 3.05616 0.709346 3.0578C0.614568 3.05944 0.52104 3.07973 0.434104 3.11752C0.347168 3.1553 0.268526 3.20984 0.202667 3.27802C0.136808 3.34619 0.0850229 3.42668 0.0502678 3.51487C0.0155128 3.60306 -0.00153175 3.69723 0.000108014 3.79201C0.00174778 3.88679 0.0220396 3.98032 0.0598246 4.06725C0.0976096 4.15419 0.152148 4.23283 0.220326 4.29869L2.9327 7.01106C2.99836 7.07727 3.07649 7.12982 3.16256 7.16568C3.24864 7.20154 3.34096 7.22 3.43421 7.22C3.52745 7.22 3.61978 7.20154 3.70585 7.16568C3.79193 7.12982 3.87005 7.07727 3.93571 7.01106L9.69951 1.24727C9.77121 1.18112 9.82843 1.10085 9.86756 1.01149C9.9067 0.922141 9.92691 0.82565 9.92691 0.728102C9.92691 0.630554 9.9067 0.534063 9.86756 0.444711C9.82843 0.355358 9.77121 0.27508 9.69951 0.208936Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="">
                Built for scale and enterprise level security
              </span>
            </li>
          </ul>
          <Link to="/blogs">
            <div className="transition-all duration-500 home-two-btn-white-rev group border-orange before:bg-orange after:bg-orange hover:border-orange w-fit">
              <span className="text-base group-hover:text-white text-main-black transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                Learn More
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
                  className="transition-all duration-300 group-hover:stroke-white stroke-main-black"
                  d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
