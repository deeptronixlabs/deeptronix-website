import React from "react";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutCompany from "../components/About/AboutCompany";
import FunFactCounterTwo from "../components/FunFact/FunFactCounterTwo";
import AboutBenefit from "../components/About/AboutBenefit";
import AboutLogoCloud from "../components/ClientLogoSlider/AboutLogoCloud";
import AboutTestimonial from "../components/Testimonials/AboutTestimonial";
import AboutTeam from "../components/Team/AboutTeam";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import Misivisi from "../components/Services/ServiceFour";
import ServiceTwo from "../components/Services/ServiceTwo";




export default function About() {
  return (
    <InnerPageLayout>
      <BreadCrumb pageTitle="About Us" currentPage="About Us" to="/about-us" />
      <AboutCompany />
      <FunFactCounterTwo />
      {/* <Misivisi/> */}
      <ServiceTwo/>
      <AboutBenefit />
    </InnerPageLayout>
  );
}
