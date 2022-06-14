import React from "react";
import {
  faBars,
  faChevronDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import "../../../styles/sidebar.css";

export default function Sidebar({ sideBarLinks, user }) {
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
          {sideBarLinks.map((Link) => {
            const { id, icon, name, link } = Link;
            return (
              <li className="sidebarListItem" key={id}>
                <NavLink
                  to={`/${user}/${link}`}
                  className="s-sidebar__nav-link"
                >
                  <div className="iconBadge">{icon}</div>
                  <em> {name}</em>
                </NavLink>
              </li>
            );
          })}

          <div className="half">
            <label htmlFor="profile2" className="profile-dropdown">
              <input type="checkbox" id="profile2" />
              <img
                src="/assets/img/teacher.png"
                alt=""
                className="topAvatar"
              />{" "}
              <span> {user}</span>
              <label htmlFor="profile2">
                <FontAwesomeIcon icon={faChevronDown} />
              </label>
              <ul className="list">
                <li>
                  <NavLink to={`/${user}/profile`} className="Droplink">
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
        </ul>
      </nav>
    </div>
  );
}
