import React, { useEffect, useRef } from "react";
import "./chats.scss";

export const Chats = ({ sides, colors, lasts }) => {
  const refs = useRef("");

  useEffect(() => {
    refs.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="chats-left">
        <div className="chats">
          hello how are you hello how are you hello how are you hello how are
          you hello how are you
        </div>
      </div>
      <div className={`chats-right ${lasts && "buttom-marg"}`} ref={refs}>
        <div className="chats chat-right">
          hello how are you hello how are you hello how are you hello how are
          you hello how are you
        </div>
      </div>
    </>
  );
};
