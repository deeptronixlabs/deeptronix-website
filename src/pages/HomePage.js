import React from "react";
import HeroOne from "../components/Hero/HeroOne";
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne";
import LogoSliderOne from "../components/ClientLogoSlider/LogoSliderOne";
import AboutDT from "../components/About/AboutOne";
import FunFactOne from "../components/FunFact/FunFactOne";
import UnlockingPotential from "../components/Services/ServiceOne";
import SolutionArea from "../components/WorkProcess/WorkProcessOne";
import CEOstatement from "../components/Testimonials/TestimonialOne";
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
      <AboutDT />
      <FunFactOne />
      <CEOstatement />
      <UnlockingPotential />
      <SolutionArea />
      <CtaOne />
      <FooterOne />
    </PageLayout>
  );
}
