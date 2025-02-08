import React, { useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeOne from "./pages/HomePage";
import AOS from "aos";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from "./pages/Solution";
import Faq from "./pages/Faq";
import Teams from "./pages/Teams";
import Notfound from "./pages/Notfound";


export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeOne />} />
        {/* Inner Pages */}
        <Route path="/about-us" element={<About />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-solutions" element={<Projects />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}
