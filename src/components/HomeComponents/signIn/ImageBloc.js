import React from "react";
import { Col } from "react-bootstrap";
import { Elements } from "react-bootstrap";

import {
  faTwitter,
  faGoogle,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ImageBloc(props) {
  const imgUrl = props.img;

  return (
    <Col md={5} className=" image-bloc d-none d-md-block d-lg-block">
      <div id="social" className="">
        <div className="social-icon-box " href="#twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="social-icon-box " href="#google">
          <FontAwesomeIcon icon={faGoogle} />
        </div>
        <div className="social-icon-box " href="#facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
      </div>
      <img
        className=" img-fluid  imgSignin bounce"
        id="ball"
        src={imgUrl}
        alt=""
      />
    </Col>
  );
}

export default ImageBloc;
