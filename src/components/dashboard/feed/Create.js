import React from "react";
import {
  faTags,
  faPhotoFilm,
  faFaceGrin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Create = ({ showStore }) => {
  return (
    <div className="create" style={{ display: showStore ? "block" : "none" }}>
      <div className="create__first">
        <div className="create__first-img">
          <span>
            <img src="../assets/img//teacher.png" alt="user" />
          </span>
        </div>
        <div className="create__first-input">
          <input
            type="text"
            id="create__first-inputs"
            placeholder="what are your mind? "
          />
        </div>
      </div>
      <div className="create__second">
        <span className="create__second-icon create_upload">
          <FontAwesomeIcon className="create-icon upload" icon={faPhotoFilm} />
          <span className="text">Photo / Video</span>
        </span>

        <span className="create__second-icon create_tag">
          <FontAwesomeIcon className="create-icon tag" icon={faTags} />
          <span className="text">Tag friends</span>
        </span>

        <span className="create__second-icon ">
          <FontAwesomeIcon className="create-icon emoji" icon={faFaceGrin} />
        </span>
      </div>
    </div>
  );
};

export default Create;
