import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  faTwitter,
  faGoogle,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomeContent() {
  return (
    <Container className="container-fluid ">
      <Row>
        <Col sm={12} md={7} xs={12}>
          <div className="text-bloc">
            <h2 className="title">
              Our childrens learn better <br></br>
              <span>when we are togather</span>
            </h2>
            <p className="paragraph">
              We all want the best for our children, not only academically, but
              also socially and emotionally. let's strengthen our bond to ensure
              a successful school year.
            </p>

            <div className="sign-btn">
              <Link to="/signin">
                <div className="buttons">
                  <button className="blob-btn">
                    Join the className
                    <span className="blob-btn__inner">
                      <span className="blob-btn__blobs">
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                      </span>
                    </span>
                  </button>
                  <br />

                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <filter id="goo">
                        <feGaussianBlur
                          in="SourceGraphic"
                          result="blur"
                          stdDeviation="10"
                        ></feGaussianBlur>
                        <feColorMatrix
                          in="blur"
                          mode="matrix"
                          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                          result="goo"
                        ></feColorMatrix>
                        <feBlend
                          in2="goo"
                          in="SourceGraphic"
                          result="mix"
                        ></feBlend>
                      </filter>
                    </defs>
                  </svg>
                </div>{" "}
              </Link>
            </div>
            <div id="social-m" className="d-md-none">
              <div className="social-icon-box twitter" href="#twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="social-icon-box google" href="#google">
                <FontAwesomeIcon icon={faGoogle} />
              </div>
              <div className="social-icon-box facebook" href="#facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <img
        className="karate-img img-fluid bounce"
        id="ball"
        src="../assets/img/home-karate.png"
        alt=""
      />
      <img
        className="player-img img-fluid "
        id="ball2"
        src="../assets/img/home-player.png"
        alt=""
      />
      <img
        className="traveler-img img-fluid"
        id="ball3"
        src="../assets/img/home-traveler.png"
        alt=""
      />
    </Container>
  );
}

export default HomeContent;
