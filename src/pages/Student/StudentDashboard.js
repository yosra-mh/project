import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discussions from "./Discussions";
import MySchedule from "./MySchedule";
import Classroom from "./Classroom ";
import Home from "./Home";
import Profile from "./Profile";
import "../../App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../helpers";
import SimpleBar from "simplebar-react";
import { studentLinks } from "../../components/dashboard/sideBarData";

function StudentDashboard() {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <ChakraProvider theme={theme}>
        <Router>
          <div className="s-layout">
            <Sidebar sideBarLinks={studentLinks} user="student" />
            <Switch>
              <Route exact path="/student/home">
                <Home />
              </Route>
              <Route exact path="/student/discussions">
                <Discussions />
              </Route>
              <Route exact path="/student/classroom">
                <Classroom />
              </Route>
              <Route exact path="/student/mySchedule">
                <MySchedule />
              </Route>

              <Route exact path="/student/profile">
                <Profile />
              </Route>
            </Switch>
          </div>
        </Router>
      </ChakraProvider>
    </SimpleBar>
  );
}

export default StudentDashboard;
