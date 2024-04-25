import { experiences } from "@/data/experience";
import Image from "next/image";
import React from "react";

export default function Experience() {
  return (
    <div className="col-xl-12 col-lg-12">
      <div className="kissee-section-title-wrap mb-20">
        <h4 className="section-title">
          <Image
            width={30}
            height={27}
            src="/assets/img/icon/exper-icon.png"
            alt="experience"
          />
          experience
        </h4>
      </div>
      <div className="row" style={{ columnGap: 35 }}>
        {experiences.map((elm, i) => (
          <div
            key={i}
            className={`kissee-card-item col-xl-5 col-lg-5 ${elm.bgClass} ${
              i + 1 != experiences.length && "mb-20"
            } `}
          >
            <span className="card-subtitle">{elm.session}</span>
            <h6 className="card-title">{elm.role}</h6>
            <p className="card-text">
              {elm.company} | {elm.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
