import React from "react";
import CTA from "./components/cta";
import HomeItem from "./components/home";
import LogoCloud from "./components/logo_cloud";
import StatSection from "./components/stat_sections";
import Testimonials from "./components/testimonials";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
export default function Root() {
 return (
  <div>
   <Navigation />
   <Outlet />
   <Footer />
  </div>
 );
}
