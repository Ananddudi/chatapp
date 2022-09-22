import React from "react";
import "./conversation.scss";
import defaultimage from "../assets/personlogo.jpg";
export const Conversation = () => {
  return (
    <div className="conversation-main">
      <div className="conversation-profile-pic">
        <img src={defaultimage} alt="defaults" />
      </div>
      <div className="conversation-name-desc">
        <div className="name">name</div>
        <div className="desc">desc</div>
      </div>
    </div>
  );
};
