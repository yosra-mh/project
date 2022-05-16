import React from "react";
import {
  faCommentDots,
  faPersonChalkboard,
  faGraduationCap,
  faCalendarDay,
  faChildren,
  faBars,
  faChevronDown,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import "../../styles/sidebar.css";

export default function Sidebar() {
  const isActive = {
    fontWeight: "bold",
    color: "#0894f6",
  };
  return (
    <div className="s-layout__sidebar">
      <nav className="s-sidebar__nav">
        <a className="s-sidebar__trigger" href="#0">
          <FontAwesomeIcon icon={faBars} />
        </a>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <NavLink
              to="/admin/dashboard"
              className=" s-sidebar__nav-link"
              activeStyle={isActive}
            >
              <div className="topbarIconContainer iconBadge">
                <FontAwesomeIcon icon={faCommentDots} />
                <span className="topIconBadge">2</span>
              </div>
              <em>Discussions</em>
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink to="/admin/teachers" className="s-sidebar__nav-link">
              <div className="iconBadge">
                <FontAwesomeIcon icon={faPersonChalkboard} />
              </div>
              <em>Teachers</em>
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink to="/admin/students" className="s-sidebar__nav-link">
              <div className="iconBadge">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <em>Students</em>
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink to="/admin/classrooms" className="s-sidebar__nav-link">
              <div className="iconBadge">
                <FontAwesomeIcon icon={faChildren} />
              </div>
              <em>Classrooms</em>
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink to="/admin/schedules" className="s-sidebar__nav-link">
              <div className="iconBadge">
                <FontAwesomeIcon icon={faCalendarDay} />
              </div>
              <em> Schedules</em>
            </NavLink>
          </li>
          <li>
            <div className="half">
              <label htmlFor="profile2" className="profile-dropdown">
                <input type="checkbox" id="profile2" />
                <img
                  src="/assets/img/Cute_Teacher_Character_04_generated.png"
                  alt=""
                  className="topAvatar"
                />{" "}
                <span>Admin</span>
                <label htmlFor="profile2">
                  <FontAwesomeIcon icon={faChevronDown} />
                </label>
                <ul className="list">
                  <li>
                    <NavLink to="/admin/profile" className="Droplink">
                      <FontAwesomeIcon className="iconMenuD" icon={faUser} />
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="Droplink">
                      <FontAwesomeIcon className="iconMenuD" icon={faUser} />
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </label>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
