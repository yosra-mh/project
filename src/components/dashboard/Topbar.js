import React from "react";
import { faBell, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"></span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer badgeIcon">
            <FontAwesomeIcon icon={faBell} />
            <span className="topIconBadge">2</span>
          </div>

          <img
            src="/assets/img/Cute_Teacher_Character_04_generated.png"
            alt=""
            className="topAvatar"
          />
          <div className="topbarIconContainer">
            <span className="name"> Abidi Souha </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
