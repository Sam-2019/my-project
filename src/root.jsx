import React from "react";
import CTA from "./components/cta";
import HomeItem from "./components/home";
import LogoCloud from "./components/logo_cloud";
import StatSection from "./components/stat_sections";
import Testimonials from "./components/testimonials";

export default function Root() {
 return (
  <div>
   <HomeItem />
   {/* <CTA /> */}
   <LogoCloud />
   <StatSection />
   {/* <Testimonials /> */}
  </div>
 );
}
