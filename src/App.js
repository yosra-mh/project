import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SigninUser from "./pages/SigninUser";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Home from "./pages/Home";
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/signin">
          <SignIn />
        </Route>

        <Route exact path="/signin/admin">
          <SigninUser
            userRole="Administrator"
            imgUrl="../assets/img/signin.png"
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
        <Route exact path="/admin/dashboard">
          <AdminDashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
