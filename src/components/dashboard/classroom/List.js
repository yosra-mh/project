import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  faBell,
  faSearch,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../../../styles/classroom.css";
import { Link } from "react-router-dom";
function List({ user, classrooms, setClassrooms }) {
  const [query, setQuery] = useState("");

  return (
    <div className="s-layout__content " id="classroom">
      <div className="navBar">
        <div className="navbar__first">
          <div className="navbar__first-search">
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />

            <input
              type="text"
              id="navbar__first-searchbar"
              placeholder=" Classroom Search"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
          </div>
        </div>

        <div className="navbar__last">
          <span className="create__second-icon create_tag">
            <FontAwesomeIcon
              className="create-icon tag"
              icon={faClipboardCheck}
            />
            <Link to={`/${user}/grades`}>
              {" "}
              <span className="grades">Grades</span>
            </Link>
          </span>

          <span className="create__second-icon ">
            <FontAwesomeIcon className="create-icon emoji" icon={faBell} />
          </span>
        </div>
      </div>
      <Container className="container-fluid ">
        <Row md={12}>
          <h2 className="listTitle">Subjects</h2>
        </Row>
        <Row>
          {classrooms
            .filter((classroom) => classroom.name.toLowerCase().includes(query))
            .map((classroom) => (
              <Col sm={4} md={3} xs={12} id="classSection" key={classroom.id}>
                <Link to={`/${user}/classroom/${classroom.name}`}>
                  <h3 className="subjectName">{classroom.name}</h3>
                  <div className="teacher-block">
                    <img
                      className="teacher-img"
                      src={classroom.image}
                      alt="teacher"
                    />
                    <div className="textBlock">
                      <span>Taught by</span>
                      <h4>{classroom.teacher}</h4>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default List;
