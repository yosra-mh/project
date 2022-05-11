import React from "react";
import { Row } from "react-bootstrap";
import LoginForm from "./../components/HomeComponents/signIn/LoginForm";
import ImageBloc from "./../components/HomeComponents/signIn/ImageBloc";
import "./../styles/signin.css";

function SigninUser(props) {
  const userRole = props.userRole;
  const imgUrl = props.imgUrl;

  return (
    <Row>
      <ImageBloc img={imgUrl} />
      <LoginForm description={userRole} />
    </Row>
  );
}

export default SigninUser;
