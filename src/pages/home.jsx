import { Fragment } from "react";
import HomeItem from "../components/home";
import Stats from "../components/stats";
import LogoCloud from "../components/logo_cloud";

export default function Home() {
  return (
    <Fragment>
      <HomeItem />
      <LogoCloud />
      <Stats />
    </Fragment>
  );
}
