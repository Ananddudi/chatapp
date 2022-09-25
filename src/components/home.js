import React, { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import "./home.scss";
import Chatsection from "./chatsection";

export const Home = () => {
  const [register, setRegister] = useState(true);

  const openchat = () => {
    setRegister(false);
  };

  const userfetch = async () => {
    const user = await fetch("/user/userauth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await user.json();
    if (!result) {
      setRegister(true);
    } else {
      if (result == "You are not suppose to authorize this root!") {
        setRegister(true);
        return localStorage.clear();
      }
      setRegister(false);
      localStorage.setItem("name", result.name);
      localStorage.setItem("token", result.token);
      localStorage.setItem("email", result.email);
    }
  };
  useEffect(() => {
    userfetch();
  }, []);
  return (
    <section className="backimages">
      <Navbar register={register} openchat={openchat} />
      {register || <Chatsection />}
    </section>
  );
};
