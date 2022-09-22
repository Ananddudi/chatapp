import React from "react";
import { Navbar } from "./navbar";
import "./home.scss";
import Auth from "./auth";
import Chatsection from "./chatsection";

export const Home = () => {
  return (
    <section className="backimages">
      <Navbar />
      <Chatsection />
    </section>
  );
};
