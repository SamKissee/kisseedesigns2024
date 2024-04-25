import { education } from "@/data/education";
import Image from "next/image";
import React from "react";

export default function Education() {
  return (
    <div className="col-xl-12 col-lg-12">
      <div className="kissee-section-title-wrap mb-20">
        <h4 className="section-title">
          <Image
            width={38}
            height={23}
            src="/assets/img/icon/edu-icon.png"
            alt="icon"
          />
          Education
        </h4>
      </div>

      <div className="row" style={{ columnGap: 35 }}>
        {education.map((elm, i) => (
          <div
            className={`kissee-card-item col-xl-5 col-lg-5  ${elm.bgClass}
          mb-20`}
          >
            <h6 className="card-title">{elm.cardTitle}</h6>
            <p className="card-text">{elm.cardSubtitleSecondary}</p>
            <p className="card-text">{elm.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
