import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import ProjectList from "../components/Projects/ProjectList";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
// import CtaOne from "../components/Cta/CtaOne";
import CtaOne from "../components/Cta/DownloadCta";
import CaseStudyOne from "../components/CaseStudies/CaseStudyOne";


export default function Projects() {
  return (
    <InnerPageLayout>
      <BreadCrumb
        pageTitle="Our Solutions"
        currentPage="Our Solutions"
        href="/projects"
      />
      <CaseStudyOne/>
      {/* <ProjectList /> */}
      <CtaOne />
    </InnerPageLayout>
  );
}
