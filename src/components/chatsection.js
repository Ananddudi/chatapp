import React, { useEffect, useState, useRef } from "react";
import { Conversation } from "./conversation";
import { Chats } from "./chats";
import "./chatsection.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";

const Chatsection = () => {
  const [animate, setAnimate] = useState(false);
  const [sides, setSides] = useState("left");
  const [colors, setColors] = useState("chats chat-right");
  //   const refs = useRef("");
  //   const mainref = useRef("");
  //   useEffect(() => {
  //     if (animate) {
  //       console.log(refs.current.getBoundingClientRect());
  //       const heights = refs.current.getBoundingClientRect();
  //       let root = document.documentElement;
  //       root.style.setProperty("--heightis", heights + "px");
  //     }
  //   }, [animate]);
  return (
    <section className="chatsection">
      <div className="mainsection">
        <header>
          <div className="chatsheader">CHAT SECTION</div>
          <div
            className={`icons ${animate && "icons-animate"}`}
            onMouseEnter={() => setAnimate(true)}
            onMouseLeave={() => setAnimate(false)}
          >
            <AiOutlineMenu />
          </div>
        </header>
        <div
          //   ref={mainref}
          onMouseEnter={() => setAnimate(true)}
          onMouseLeave={() => setAnimate(false)}
          className={`header-content ${animate && "header-animate"}`}
        >
          <ul
            className="list"
            //   ref={refs}
          >
            <li>
              <div>
                <AiOutlineUserSwitch className="fitobject" />
              </div>
              <div className="texts">User</div>
            </li>
            <li>
              <div>
                <AiFillGithub className="fitobject" />
              </div>
              <div className="texts">Owner</div>
            </li>
            <li>
              <div>
                <AiFillHeart className="fitobject" />
              </div>
              <div className="texts">Like</div>
            </li>
          </ul>
        </div>
        <div className="scrolls">
          {/* <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation /> */}

          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
          <Chats sides={sides} colors={colors} />
        </div>
        <div className="texts-input">
          <input type="text" placeholder="Aa" />
          <button>
            <AiOutlineSend className="sendicon" />
            <div>Send</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Chatsection;
