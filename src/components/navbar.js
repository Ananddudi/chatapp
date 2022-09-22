import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./navbar.scss";
import Auth from "./auth";

export const Navbar = () => {
  const [popup, setPopup] = useState({
    popup: false,
    message: "",
  });

  const closemodel = () => {
    setPopup({ type: false, message: "" });
  };

  return (
    <>
      <div className="navbar">
        <div className="sections-one">
          <img src={logo} alt="logo" className="logoimage" />
        </div>
        <div className="sections-two">
          <ul>
            <li className="list-items">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="list-items">
              <button
                onClick={() => setPopup({ popup: true, message: "sign up" })}
              >
                Sign Up
              </button>
            </li>
            <li className="list-items">
              <button
                onClick={() => setPopup({ popup: true, message: "sign in" })}
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
        <div className="sections-three">
          <div className="search">
            <p>Search</p>
            <input type="text" placeholder="Search Name" />
          </div>
        </div>
      </div>
      {popup.popup && <Auth message={popup.message} close={closemodel} />}
    </>
  );
};
