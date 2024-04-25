import Header from "@/components/homes/headers/Header";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";
import AboutOne from "@/components/homes/about/AboutOne";
import React from "react";

import MenuTwo from "@/components/homes/menus/MenuTwo";

export const metadata = {
  title: "Home | Kissee Designs",
  description: "Sam Kissee is an Idaho Based Software Engineer",
};

export default function Home1() {
  return (
    <>
      <div className="page-wrapper home-1" id="home-1">
        <Header />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <AboutOne />
            <MenuTwo />
          </div>
        </div>
      </div>
    </>
  );
}
