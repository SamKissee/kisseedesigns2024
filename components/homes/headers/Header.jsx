"use client";
import React, { useState, useEffect } from "react";
import Menu from "../menus/Menu";
import { menuItems } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const addDarkbg = () => {
    if (
      document.body.style.backgroundImage != "url(/assets/img/bg/dark3.jpeg"
    ) {
      document.body.style.backgroundImage = "url(/assets/img/bg/dark3.jpeg";

      setDarkMode(true);
    }
  };

  const addlightBg = () => {
    if (
      document.body.style.backgroundImage != "url(/assets/img/bg/light3.jpeg)"
    ) {
      document.body.style.backgroundImage = "url(/assets/img/bg/light3.jpeg)";

      setDarkMode(false);
    }
  };

  const handleDarkmode = () => {
    const currentState = localStorage?.getItem("idLightMode");

    if (JSON.parse(currentState) == false) {
      localStorage.setItem("idLightMode", true);
      document.body.classList.remove("dark-theme");

      addlightBg();
    } else {
      localStorage?.setItem("idLightMode", false);
      document.body.classList.add("dark-theme");
      addDarkbg();
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const currentState = localStorage?.getItem("idLightMode");
    if (JSON.parse(currentState) == true) {
      document.body.classList.remove("dark-theme");
      addlightBg();
    } else {
      document.body.classList.add("dark-theme");
      addDarkbg();
    }
  }, []);

  return (
    <div className="kissee-header-area mb-10 ">
      <div className="container">
        <div className="kissee-header-wrap">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="kissee-header-logo">
                <Link className="site-logo" href="/">
                  <Image
                    width={153}
                    height={99}
                    src={
                      darkMode
                        ? "/assets/img/logo/logo-white-small.png"
                        : "/assets/img/logo/logo-dark-small.png"
                    }
                    alt="logo"
                  />
                </Link>
              </div>
            </div>

            <div className="col-6">
              <div className="kissee-header-menu-btn text-right">
                <div
                  className="dark-btn dark-btn-stored mode-btn"
                  onClick={() => handleDarkmode()}
                >
                  {darkMode ? (
                    <i className="sunicon fa-light fa-sun-bright"></i>
                  ) : (
                    <i className="moonicon fa-solid fa-moon"></i>
                  )}
                </div>
                <div
                  className={`menu-btn toggle_menu ${menuOpen && "active"} `}
                  onClick={() => setMenuOpen((pre) => !pre)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-wrap">
          <div className={`mobile-menu mobile_menu ${menuOpen && "active"} `}>
            <Menu setMenuOpen={setMenuOpen} data={menuItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
