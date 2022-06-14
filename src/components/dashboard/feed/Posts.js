import React from "react";
import Create from "./Create";
import ShowPost from "./ShowPost";

const Posts = ({ showStore }) => {
  return (
    <div className="posts">
      <Create showStore={showStore} />
      <ShowPost />
    </div>
  );
};

export default Posts;
