import React from "react";
import "./chats.scss";

export const Chats = ({ sides, colors, lasts }) => {
  return (
    <>
      <div className="chats-left">
        <div className="chats">
          hello how are you hello how are you hello how are you hello how are
          you hello how are you
        </div>
      </div>
      <div className={`chats-right ${lasts && "buttom-marg"}`}>
        <div className="chats chat-right">
          hello how are you hello how are you hello how are you hello how are
          you hello how are you
        </div>
      </div>
    </>
  );
};
