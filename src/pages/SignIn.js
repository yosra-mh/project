import React from "react";
import { Row, Col } from "react-bootstrap";
import ImageBloc from "../components/HomeComponents/signIn/ImageBloc";
import { Link } from "react-router-dom";
import "../styles/signin.css";

function SignIn() {
  return (
    <Row>
      <ImageBloc imgUrl="../assets/img/signin.png" />
      <Col md={7} xs={12} sm={12} className="form-bloc 	d-block">
        <h1 className="logo"> LOGOLOG</h1>
        <h3 className="text">Sign up as ...</h3>
        <div className="users">
          <Link to="signin/teacher" className="user-item">
            <img
              className=" img-fluid  user bounce"
              id="ball"
              src="../assets/img/Teacher.png"
              alt=""
            />
            <h4 className="user-title">Teacher</h4>
          </Link>
          <Link to="signin/parents" className="user-item">
            <img
              className=" img-fluid  user bounce"
              id="ball"
              src="../assets/img/parents.png"
              alt=""
            />
            <h4 className="user-title">Parents</h4>
          </Link>
          <Link to="signin/student" className="user-item">
            <img
              className=" img-fluid  user bounce"
              id="ball"
              src="../assets/img/student.png"
              alt=""
            />
            <h4 className="user-title">Student</h4>
          </Link>
          <Link to="signin/admin" className="user-item">
            <img
              className=" img-fluid  user bounce"
              id="ball"
              src="../assets/img/admin.png"
              alt=""
            />
            <h4 className="user-title">Administrator</h4>
          </Link>
        </div>
      </Col>
    </Row>
  );
}

export default SignIn;
