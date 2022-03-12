import Input from "antd/lib/input/Input";
import Button from "antd/lib/button/button"
import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = ({handleSearch}) => {
  const sendInput = () => {
    let inp = document.getElementById("inp").value;
    handleSearch(inp);
}
const home = () => {
    window.location.href = "/";
}
  return (
    <div className="navbar">
      <div className="logodiv">
        <div onClick={() => home()}>
            <img src={"https://cdn.dribbble.com/users/891352/screenshots/2146790/svg_headphones.gif"} alt="png" />
        </div>
      </div>

      <div className="navbarInput">
        <Input placeholder="Search your favourite song" id="inp"></Input>
        <Button onClick={sendInput}>Search</Button>
      </div>

      <div style={{ textDecoration: "none", fontSize: "20px" }}>
        Play the Music you like
      </div>
    </div>
  );
};


