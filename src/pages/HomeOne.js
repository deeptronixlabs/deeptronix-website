import React from "react";
import HeroOne from "../components/Hero/HeroOne";
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne";
import LogoSliderOne from "../components/ClientLogoSlider/LogoSliderOne";
import AboutOne from "../components/About/AboutOne";
import FunFactOne from "../components/FunFact/FunFactOne";
import ServiceOne from "../components/Services/ServiceOne";
import WorkProcessOne from "../components/WorkProcess/WorkProcessOne";
import TestimonialOne from "../components/Testimonials/TestimonialOne";
import LatestBlogOne from "../components/LatestBlog/LatestBlogOne";
import CtaOne from "../components/Cta/DownloadCta";
import FooterOne from "../components/Layout/Footer/FooterOne";
import MobileHeader from "../components/Layout/Header/DemoHeader/DemoHeaderMobile";
import PageLayout from "../components/Layout/PageLayout";

export default function HomeOne() {
  return (
    <PageLayout>
      <DemoHeaderOne />
      <MobileHeader />
      <HeroOne />
      <LogoSliderOne />
      <AboutOne />
      <FunFactOne />
      <TestimonialOne />
      <ServiceOne />
      <WorkProcessOne />
      <CtaOne />
      <FooterOne />
    </PageLayout>
  );
}
