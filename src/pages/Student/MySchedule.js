import React from "react";
import "../../styles/mySchedule.css";
import Schedule from "../../components/dashboard/schedule/Schedule.js";

function MySchedule() {
  return (
    <div className="s-layout__content " id="mySchedule">
      <Schedule />
    </div>
  );
}

export default MySchedule;
