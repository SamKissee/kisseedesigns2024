import { knowledges } from "@/data/knowledges";
import React from "react";

export default function Knowledges() {
  return (
    <div className="col-xl-12 col-lg-12">
      <div className="bostami-section-title-wrap mb-20">
        <h4 className="section-title">Additional Skills</h4>
      </div>

      <div className="knowledeges-item-wrap">
        {knowledges.map((elm, i) => (
          <span key={i} className="gk-item">
            {elm}
          </span>
        ))}
      </div>
    </div>
  );
}
