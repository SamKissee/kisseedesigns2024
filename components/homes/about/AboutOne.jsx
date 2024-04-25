"use client";
import React from "react";
import { items } from "@/data/jobFeatures";
import { bioData } from "@/data/bioData";
import Image from "next/image";

export default function AboutOne() {
  return (
    <div className="col-xxl-8 col-xl-9">
      <div className="kissee-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="kissee-page-title-wrap mb-15">
            <h2 className="page-title">about</h2>
            <p>{bioData.descOne}</p>
            <p>{bioData.descTwo}</p>
          </div>
        </div>

        <div className="section-wrapper pl-60 pr-60">
          <div className="kissee-section-title-wrap mb-30">
            <h3 className="section-title">What I do!</h3>
          </div>

          <div className="kissee-what-do-wrap mb-30">
            <div className="row">
              {items.slice(0, 4).map((elm, i) => (
                <div key={i} className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className={`kissee-what-do-item `}>
                    <div className="icon" style={{ margin: "0 auto" }}>
                      <Image
                        height={40}
                        width={130}
                        style={{ margin: "0 auto", fill: "white" }}
                        src={elm.icon}
                        alt="feature"
                      />
                    </div>
                    <div className="text">
                      <h4 className="title">{elm.title}</h4>
                      <p>{elm.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center pt-25 pb-25">
          <span>© {new Date().getFullYear()} Kissee Designs.</span>
        </div>
      </div>
    </div>
  );
}
