import React from "react";
import {
  faEllipsis,
  faThumbsUp,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ShowPost = () => {
  const [state, setState] = React.useState([
    {
      id: 1,
      userImg: "../assets/img/admin1.png",
      name: "Mr Abdin",
      time: "2h",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      postImg:
        "https://www.friends.tas.edu.au/wp-content/uploads/2019/10/Friendsschool-48-1-1100x450.jpg",
    },
    {
      id: 2,
      userImg: "../assets/img/teacher.png",
      name: "Malek najjar",
      time: "4h",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      postImg:
        "https://www.friends.tas.edu.au/wp-content/uploads/2021/03/Friends-51-2-1100x450.jpg",
    },
    {
      id: 3,
      userImg: "../assets/img/parents.png",
      name: "oussama",
      time: "2h",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      postImg:
        "https://www.friends.tas.edu.au/wp-content/uploads/2019/11/Friendsschool-65-4.jpg",
    },
    {
      id: 4,
      userImg: "../assets/img/admin1.png",
      name: "khalil",
      time: "2h",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      postImg:
        "https://www.friends.tas.edu.au/wp-content/uploads/2019/11/Friendsschool-65-4.jpg",
    },
  ]);
  return (
    <div className="show">
      <h3> Posts</h3>
      {state.map((post) => (
        <div key={post.id} className="empty">
          <div className="show__header">
            <div className="show__header-img">
              <img src={post.userImg} alt="user" />
            </div>
            <div className="show__header-name">
              {post.name} <div className="date">{post.time}</div>
            </div>

            <span className="create__second-icon detail-icon ">
              <FontAwesomeIcon className="create-icon dots" icon={faEllipsis} />
            </span>
          </div>
          <div className="show__body">
            <div className="show__body-text">{post.text}</div>
            <div className="show__body-img">
              <img src={post.postImg} alt="post" />
            </div>
          </div>
          <div className="show__reactions">
            <span className="reactions">
              <FontAwesomeIcon className="create-icon " icon={faThumbsUp} />
              <span className="reactions-text">Like</span>
            </span>
            <span className="reactions">
              <FontAwesomeIcon className="create-icon " icon={faComment} />
              <span className="reactions-text">Comments</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPost;
