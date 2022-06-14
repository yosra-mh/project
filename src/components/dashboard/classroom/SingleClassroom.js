import React from "react";
import {
  faSearch,
  faSquarePlus,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../../../styles/classroom.css";
import { Link } from "react-router-dom";
import { Accordion, Modal, Form, Button } from "react-bootstrap";

function SingleClassroom({ id, subject, user }) {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="s-layout__content" id="SingleClass" key={id}>
      <div className="navBar">
        <div className="navbar__first">
          <div className="navbar__first-search">
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />

            <input
              type="text"
              id="navbar__first-searchbar"
              placeholder="Search by theme"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
          </div>
        </div>
      </div>

      <section className="classBody">
        <h3>
          <Link to={`/${user}/classroom`}>Classroom /</Link>
          <span> {subject} Class</span>
        </h3>
        <Accordion>
          <Accordion.Item eventKey="0" className="theme" id="AccordionBody">
            <div className="blueLine"></div>

            <Accordion.Header id="accordion-header">
              Accordion Theme #1
            </Accordion.Header>
            <Accordion.Body>
              <div className="chapter">
                <FontAwesomeIcon className="chapterIcon" icon={faSquarePlus} />
                <h4>Chapter 1 : Lorem ipsum dolor sit amet</h4>
                <FontAwesomeIcon className="DownloadIcon" icon={faDownload} />
              </div>
              <div className="chapter">
                <FontAwesomeIcon className="chapterIcon" icon={faSquarePlus} />
                <h4>Chapter 2 : Lorem ipsum dolor sit amet</h4>
                <FontAwesomeIcon className="DownloadIcon" icon={faDownload} />
              </div>
              <div className="assignement">
                <FontAwesomeIcon className="chapterIcon" icon={faSquarePlus} />
                <h4 onClick={handleShow}>
                  Assignement 1 <p>Due 25 jun 2022</p>
                </h4>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            className="theme "
            id="AccordionBodyDone"
          >
            <div className="blueLine"></div>
            <Accordion.Header id="accordion-header">
              Accordion Theme #2
            </Accordion.Header>
            <Accordion.Body>
              <div className="chapter">
                <FontAwesomeIcon className="chapterIcon" icon={faSquarePlus} />
                <h4>Chapter 1 : Lorem ipsum dolor sit amet</h4>
              </div>
              <div className="chapter">
                <FontAwesomeIcon className="chapterIcon" icon={faSquarePlus} />
                <h4>Chapter 2 : Lorem ipsum dolor sit amet</h4>
              </div>
              <div className="assignement">
                <FontAwesomeIcon className="chapterIcon" icon={faSquarePlus} />
                <h4>
                  Assignement 1 <p>Due 25 jun 2022 </p>
                </h4>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      <Modal show={show} onHide={handleClose} id="modal">
        <Modal.Header closeButton>
          <Modal.Title>Assignement 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Upload your Assignement</Form.Label>
              <Form.Control
                className="upload"
                type="file"
                placeholder="Upload your file"
                name="file"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id="send" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SingleClassroom;
