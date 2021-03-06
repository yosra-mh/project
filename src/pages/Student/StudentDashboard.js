import React from "react";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discussions from "./Discussions";
import MySchedule from "./MySchedule";
import List from "../../components/dashboard/classroom/List";
import Home from "./Home";
import Profile from "./Profile";
import "../../App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../helpers";
import SimpleBar from "simplebar-react";
import { studentLinks } from "../../components/dashboard/sidebar/sideBarData";
import Grades from "./Grades";
import SingleClassroom from "../../components/dashboard/classroom/SingleClassroom";
function StudentDashboard() {
  const [classrooms, setClassrooms] = React.useState([
    {
      id: 1,
      image: "../assets/img/teacher.png",
      name: "Math",
      teacher: "Mrs Sarah ",
    },
    {
      id: 2,
      image: "../assets/img/admin1.png",
      name: "Art",
      teacher: "Mr Abidi",
    },
    {
      id: 3,
      image: "../assets/img/teacher.png",
      name: "Physics",
      teacher: "Mrs othmani ",
    },
    {
      id: 4,
      image: "../assets/img/teacher.png",
      name: "Litterature",
      teacher: " Mr johnes",
    },
    {
      id: 5,
      image: "../assets/img/teacher.png",
      name: "Algebra",
      teacher: "Mr Lily",
    },
    {
      id: 6,
      image: "../assets/img/admin1.png",
      name: "Science",
      teacher: "Mrs Lea",
    },
    {
      id: 11,
      image: "../assets/img/teacher.png",
      name: "Biology",
      teacher: "Mrs Dead",
    },
    {
      id: 7,
      image: "../assets/img/admin1.png",
      name: "Chemistry",
      teacher: "Mr Doe",
    },
  ]);
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
              <Route exact path="/student/classroom/">
                <List
                  user="student"
                  classrooms={classrooms}
                  setClassrooms={setClassrooms}
                />
              </Route>

              {classrooms.map((classroom) => (
                <Route path={`/student/classroom/${classroom.name}`}>
                  <div key={classroom.id}></div>
                  <SingleClassroom
                    key={classroom.id}
                    subject={classroom.name}
                    user="student"
                  />
                </Route>
              ))}
              <Route exact path="/student/grades">
                <Grades />
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
