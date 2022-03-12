
import React from "react";
import styled from "./Navbar.module.css";

export const Navbar = ({handleSearch}) => {
  const sendInput = () => {
    let inp = document.getElementById("inp").value;
    handleSearch(inp);
}
const home = () => {
    window.location.href = "/";
}
  return (
    <div className={styled.navbar}>
      <div className={styled.logodiv}>
        <div onClick={() => home()}>
            <img src={"https://cdn.dribbble.com/users/891352/screenshots/2146790/svg_headphones.gif"} alt="png" />
        </div>
      </div>

      <div className={styled.navbarInput}>
        <input placeholder="Search your favourite song" className={styled.inp} id="inp"></input>
        <button className={styled.search} onClick={sendInput}>Search</button>
      </div>

      <div className={styled.tag} style={{ textDecoration: "none", fontSize: "20px" }}>
      Music, the mosaic of the air
      </div>
    </div>
  );
};


