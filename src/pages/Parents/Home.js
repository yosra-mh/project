import React from "react";
import Posts from "../../components/dashboard/feed/Posts";
import ChatBar from "../../components/dashboard/feed/ChatBar";

import "../../styles/feed.css";

function Home() {
  const [state, setState] = React.useState(false);
  const [current, setCurrent] = React.useState({});
  const openChat = (user) => {
    setState(true);
    setCurrent(user);
  };
  const closeChat = () => {
    setState(false);
  };
  return (
    <div className="s-layout__content " id="feed">
      <Posts display="none" />
      <ChatBar />
    </div>
  );
}

export default Home;
