import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import {
  faTwitter,
  faGoogle,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HomeNav() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container id="navhead">
        <Navbar.Brand id="logo" href="#home">
          LOGOLOG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="links" href="#features">
              Learn more
            </Nav.Link>
            <Nav.Link className="links" href="#pricing">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              id="social-h"
              className="social-icon-box twitter"
              href="#twitter"
            >
              <FontAwesomeIcon className="social-icon" icon={faTwitter} />
            </Nav.Link>
            <Nav.Link
              id="social-h"
              className="social-icon-box google"
              href="#google"
            >
              <FontAwesomeIcon className="social-icon" icon={faGoogle} />
            </Nav.Link>
            <Nav.Link
              id="social-h"
              className="social-icon-box facebook"
              href="#facebook"
            >
              <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNav;
