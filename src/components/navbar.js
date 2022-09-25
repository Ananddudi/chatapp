import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./navbar.scss";
import Auth from "./auth";

export const Navbar = ({ register, openchat }) => {
  const [popup, setPopup] = useState({
    popup: false,
    message: "",
  });

  const opensignup = () => {
    setPopup({ popup: true, message: "sign up" });
  };

  const closemodel = () => {
    if (!register) {
      setPopup({ popup: false, message: "" });
    }
  };
  const closes = () => {
    setPopup({ popup: false, message: "" });
  };

  useEffect(() => {
    if (register) {
      setPopup({ popup: true, message: "sign in" });
    } else {
      setPopup({ popup: false, message: "" });
    }
  }, [register]);

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
            {register && (
              <>
                <li className="list-items">
                  <button
                    onClick={() =>
                      setPopup({ popup: true, message: "sign up" })
                    }
                  >
                    Sign Up
                  </button>
                </li>
                <li className="list-items">
                  <button
                    onClick={() =>
                      setPopup({ popup: true, message: "sign in" })
                    }
                  >
                    Sign In
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="sections-three">
          <div className="search">
            <p>Search</p>
            <input type="text" placeholder="Search Name" />
          </div>
        </div>
      </div>
      {popup.popup && (
        <Auth
          openchat={openchat}
          message={popup.message}
          close={closemodel}
          closes={closes}
          opensignup={opensignup}
        />
      )}
    </>
  );
};
