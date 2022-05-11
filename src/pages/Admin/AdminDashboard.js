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
import "../../App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../helpers";
import SimpleBar from "simplebar-react";

function AdminDashboard() {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <ChakraProvider theme={theme}>
        <Router>
          <div className="s-layout">
            <Sidebar />
            <Switch>
              <Route exact path="/admin/dashboard">
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
                <Main />
              </Route>
            </Switch>
          </div>
        </Router>
      </ChakraProvider>
    </SimpleBar>
  );
}

export default AdminDashboard;
