import { contactData } from "@/data/contactData";
import { profileInfo } from "@/data/profileInfo";
import { socialMediaData } from "@/data/socials";
import Image from "next/image";
import React from "react";

export default function PersonalInfo() {
  return (
    <div className="col-xxl-3 col-xl-3">
      <div className="kissee-parsonal-info-area">
        <div className="kissee-parsonal-info-wrap">
          <div className="kissee-parsonal-info-img">
            <Image
              width={240}
              height={240}
              src={profileInfo.imageSrcOne}
              alt="avatar"
            />
          </div>

          <h4 className="kissee-parsonal-info-name">
            <a href="#">{profileInfo.name}</a>
          </h4>
          <span className="kissee-parsonal-info-bio mb-15">
            {profileInfo.title}
          </span>

          <ul className="kissee-parsonal-info-social-link mb-30">
            {socialMediaData.map((elm, i) => (
              <li key={i}>
                <a style={{ color: elm.color }} href={elm.href}>
                  <i className={elm.className}></i>
                </a>
              </li>
            ))}
          </ul>

          <div className="kissee-parsonal-info-contact mb-30">
            {contactData.map((elm, i) => (
              <div key={i} className="kissee-parsonal-info-contact-item">
                <div
                  style={{ color: `${elm.color}`, fontSize: `${elm.fontSize}` }}
                  className="icon"
                >
                  <i className={elm.iconClass}></i>
                </div>
                <div className="text">
                  <span>{elm.text.label}</span>
                  <p>{elm.text.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="kissee-parsonal-info-btn">
            <a className="btn-1" href="/sam_kissee_resume.pdf" download>
              <span style={{ color: "#fff" }} className="icon">
                <i className="fa-regular fa-download"></i>
              </span>
              download resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
