import { Link } from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const logoData = [
  {
    logoUrl: "/assets/images/GIS-Solution.png",
    href: "/",
  },
  {
    logoUrl: "/assets/images/GEOINOVO.png",
    href: "/",
  },
  {
    logoUrl: "/assets/images/petronas.png",
    href: "/",
  },
  {
    logoUrl: "/assets/images/simedarby.png",
    href: "/",
  },
  {
    logoUrl: "/assets/images/GIS-Solution.png",
    href: "/",
  },
  {
    logoUrl: "/assets/images/GEOINOVO.png",
    href: "/",
  },
  {
    logoUrl: "/assets/images/petronas.png",
    href: "/",
  },
  {
    logoUrl: "/assets/images/simedarby.png",
    href: "/",
  },
];

export default function LogoSliderOne() {
  const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: false,
    navigation: false,
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  };
  return (
    <section id="home-one-client">
      <div className="2xl:px-[152px] md:px-10 xl:xl:py-[130px] md:py-[80px] px-5 py-10 overflow-x-hidden">
        <p className="text-base text-paragraph font-medium mb-[50px] text-center">
          Our Partners
        </p>
        <Swiper {...swiperOptions} className="w-full h1-partner_slider">
          {logoData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center client-item">
                <Link to={item.href} aria-label="partner">
                  <img src={item.logoUrl} alt="logo" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
