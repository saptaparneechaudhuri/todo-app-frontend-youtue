import React from "react";
import "./home.css";
import { ReactComponent as Moon } from "../../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../../assets/icon-sun.svg";
import Input from "../../components/input/Input";
import List from "../../components/list/List";

const Home = () => {
  const hanldeIcon = () => {
    let moon = document.querySelector("#moon");
    let sun = document.querySelector("#sun");
    let theme = document.querySelector(".main-container");
    let lightBg = document.querySelector("#light-bg");
    let darkBg = document.querySelector("#dark-bg");

    moon.classList.toggle("hidden");
    sun.classList.toggle("hidden");
    theme.classList.toggle("dark");
    lightBg.classList.toggle("hidden");
    darkBg.classList.toggle("hidden");
  };
  return (
    <section className="home-page-container">
      <img
        className="home-page-image"
        id="light-bg"
        src="/images/bg-desktop-light.jpg"
        alt="home image light"
      />
      <img
        className="home-page-image hidden"
        id="dark-bg"
        src="/images/bg-desktop-dark.jpg"
        alt="home image dark"
      />

      <div className="todo-container">
        <div className="todo-wrapper">
          <h1 className="title">todo</h1>
          <div className="theme-icon">
            <Moon id="moon" onClick={() => hanldeIcon()} />
            <Sun id="sun" className="hidden" onClick={() => hanldeIcon()} />
          </div>
        </div>

        <Input />
        <List />
      </div>
    </section>
  );
};

export default Home;
