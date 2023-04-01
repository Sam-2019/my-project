import { Fragment } from "react";
import HomeItem from "../components/home";
import LogoCloud from "../components/logo_cloud";
import StatSection from "../components/stat_sections";

export default function Home() {
 return (
  <Fragment>
   <HomeItem />
   {/* <CTA /> */}
   <LogoCloud />
   <StatSection />
   {/* <Testimonials /> */}
  </Fragment>
 );
}
