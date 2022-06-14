import React from "react";
import "../../styles/discussions.css";
import { CometChatUI } from "../../cometchat-pro-react-ui-kit/CometChatWorkspace/src";
export default function Discussions() {
  return (
    <div className="s-layout__content " id="chat">
      <CometChatUI />
    </div>
  );
}
