import { useState, useEffect } from "react";
import backimage from "../assets/forArrow.gif";
import bluebackimage from "../assets/forArrow2.gif";
import firework from "../assets/fireworks.gif";
import { RiHomeSmileFill } from "react-icons/ri";
import "./profile.scss";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [showcontent, setShowcontent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowcontent(true);
    }, 8000);
  }, []);

  return (
    <section className="profilePage">
      <img src={backimage} className="backimage" alt="cool" />
      <div className="redArrow"></div>
      <img src={bluebackimage} className="bluebackimage" alt=" " />
      <div className="blueArrow"></div>
      <img src={firework} className="fireworks" alt=" " />
      <div className="profiletextparent">
        <div className="profileText">Anand dudi</div>
      </div>
      {showcontent && (
        <article className="textProfile">
          <h1 className="headertextProfile">
            Thanks For Visiting My App! Really Appreciate{" "}
          </h1>
          <h1 className="emoji">&#128522;</h1>
          <h3 className="frontandback">FrontEnd and Backend :</h3>
          <p className="myname">Anand dudi</p>
          <br />
          <div className="detailclass">
            <h3 className="detailText">Some-Details:</h3>
            <p className="detail">
              This is my first website.I use javascript's framework
              <font color="lightcoral">REACT</font>
              as Frontend and python's framework
              <font color="lightcoral">DJANGO</font>
              as backend.
              <br />
              i did not use hooks called useReducer instead of so many useState
              <br />
              but i will definitely use in next project. Overlall its been nice
              <br />
              journey. i have also built python's QT framework application and
              it
              <br />
              wasn't that complicated as this is but i learnt how to flourish
              any
              <br />
              project along the way. NOW I can surely say that i can make any{" "}
              <br />
              websites with good architecture.
              <RiHomeSmileFill className="smilehome" />
            </p>
          </div>
          <div
            onClick={() => setTimeout(() => navigate("/"), 230)}
            className="profileBackButton"
          >
            <span>Back</span>
          </div>
        </article>
      )}
    </section>
  );
};
