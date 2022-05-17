import {
  faCommentDots,
  faPersonChalkboard,
  faGraduationCap,
  faCalendarDay,
  faChildren,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const adminLinks = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faCommentDots} />,
    name: "Discussions",
    link: "discussions",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faPersonChalkboard} />,
    name: "Teachers",
    link: "teachers",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    name: "Students",
    link: "students",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faChildren} />,
    name: "Classrooms",
    link: "classrooms",
  },
];

export const studentLinks = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faHouse} />,
    name: "Home",
    link: "home",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faCommentDots} />,
    name: "Discussions",
    link: "discussions",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faChildren} />,
    name: "Classroom",
    link: "classroom",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faCalendarDay} />,
    name: "MySchedule",
    link: "mySchedule",
  },
];
