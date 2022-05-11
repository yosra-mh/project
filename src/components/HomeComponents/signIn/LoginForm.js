import React, { Component } from "react";
import { Col } from "react-bootstrap";

import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const LoginForm = (props) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Please enter your email"),
      password: Yup.string().required("Please enter your password."),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      const description = props.description;

      return (
        <Col md={7} xs={12} sm={12} className="form-bloc 	d-block">
          <form onSubmit={handleSubmit}>
            <h1 className="logo"> LOGOLOG</h1>
            <h3 className="text">
              Please sign in to your {description} account.
            </h3>
            <div className="input-bloc">
              <div className="form-group">
                <label id="label" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email "
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email && "error form-control"
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label id="label" htmlFor="password">
                  Password
                </label>
                <input
                  id="password form-control"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password && "error"}
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="form-control btn btn-primary submit px-3 btn-lg btn-block"
              >
                Join the school
              </button>
              <a href="#" className="forgot-password text-right">
                Forgot password?
              </a>
            </div>
          </form>
        </Col>
      );
    }}
  </Formik>
);

export default LoginForm;
