import React from "react";

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: "../assets/img/admin1.png", name: "Fawad Khan" },
    { id: 2, image: "../assets/img/teacher.png", name: "Aasad Khan" },
    { id: 3, image: "../assets/img/parents.png", name: "Kamran Khan" },
    { id: 4, image: "../assets/img/student.png", name: "Javed Khan" },
    { id: 5, image: "../assets/img/signIn.png", name: "Fazal Khan" },
    { id: 6, image: "../assets/img/admin1.png", name: "Rahim Khan" },
    { id: 11, image: "../assets/img/signIn.png", name: "Imran Khan" },
    { id: 7, image: "../assets/img/admin1.png", name: "Saeed Khan" },
    { id: 8, image: "../assets/img/admin1.png", name: "Bilal Khan" },
    { id: 9, image: "../assets/img/teacher.png", name: "Umer Khan" },
    { id: 10, image: "../assets/img/parents.png", name: "Usman Khan" },
  ]);

  return (
    <div className="chatBar">
      <h3>Contacts</h3>
      {state.map((user) => (
        <div className="chatBar__list" key={user.id}>
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;
