import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discussions from "./Discussions";
import Parents from "./Parents";
import Schedules from "./Schedules";
import Classrooms from "./Classrooms";
import Teachers from "./Teachers";
import Students from "./Students";
import Main from "../../components/dashboard/profile/Main";
import Profile from "./Profile";
import "../../App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../helpers";
import SimpleBar from "simplebar-react";
import { adminLinks } from "../../components/dashboard/sideBarData";

function AdminDashboard() {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <ChakraProvider theme={theme}>
        <Router>
          <div className="s-layout">
            <Sidebar sideBarLinks={adminLinks} user="admin" />
            <Switch>
              <Route exact path="/admin/discussions">
                <Discussions />
              </Route>
              <Route exact path="/admin/teachers">
                <Teachers />
              </Route>
              <Route exact path="/admin/parents">
                <Parents />
              </Route>
              <Route exact path="/admin/schedules">
                <Schedules />
              </Route>
              <Route exact path="/admin/classrooms">
                <Classrooms />
              </Route>
              <Route exact path="/admin/students">
                <Students />
              </Route>
              <Route exact path="/admin/profile">
                <Profile />
              </Route>
            </Switch>
          </div>
        </Router>
      </ChakraProvider>
    </SimpleBar>
  );
}

export default AdminDashboard;
