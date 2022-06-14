import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SigninUser from "./pages/SigninUser";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import StudentDashboard from "./pages/Student/StudentDashboard";
import Home from "./pages/Home";
import ParentsDashboard from "./pages/Parents/ParentDashboard";
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/signin">
          <SignIn imgUrl="../assets/img/signin.png" />
        </Route>

        <Route exact path="/signin/admin">
          <SigninUser
            userRole="Administrator"
            imgUrl="../assets/img/admin1.png"
          />
        </Route>
        <Route exact path="/signin/parents">
          <SigninUser
            userRole="Parents"
            imgUrl="../assets/img/Boy_01 [Converted].png"
          />
        </Route>

        <Route exact path="/signin/teacher">
          <SigninUser userRole="Teacher" imgUrl="../assets/img/teacher.png" />
        </Route>
        <Route exact path="/signin/student">
          <SigninUser userRole="Student" imgUrl="../assets/img/student.png" />
        </Route>

        <Route exact path="/admin/discussions">
          <AdminDashboard />
        </Route>

        <Route exact path="/student/home">
          <StudentDashboard />
        </Route>

        <Route exact path="/parents/home">
          <ParentsDashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
