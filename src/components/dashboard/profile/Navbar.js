import React from "react";
import {
  FaSistrix,
  FaHome,
  FaFontAwesomeFlag,
  FaVideo,
  FaUsers,
  FaGamepad,
  FaPlus,
  FaFacebookMessenger,
  FaBell,
  FaCaretDown,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navbar__first">
        <div className="navbar__first-search">
          <input
            type="text"
            className="navbar__first-searchbar"
            placeholder="Facebook Search"
          />
          <FaSistrix className="navar__searchIcon" />
        </div>
      </div>

      <div className="navbar__last">
        <span className="navbar__last-section">
          <FaPlus />
        </span>
        <span className="navbar__last-section">
          <FaFacebookMessenger />
        </span>
        <span className="navbar__last-section">
          <FaBell />
        </span>
        <span className="navbar__last-section">
          <FaCaretDown />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
