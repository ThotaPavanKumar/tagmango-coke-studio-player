import Input from "antd/lib/input/Input";
import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logodiv">
        <div>
          {/* <Link to="/home"> */}
            <img src={"https://i.ibb.co/ZJDxkjX/download.png"} alt="png" />
          {/* </Link> */}
        </div>
      </div>

      <div className="navbarInput">
        <Input placeholder="Search your favourite song"></Input>
      </div>

      <div style={{ textDecoration: "none", fontSize: "20px" }}>
        Play the Music you like
      </div>
    </div>
  );
};

// const handleArtist=()=>
//     {
//         axios({
//             method: 'get',
//             url: `https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json`,
//             headers:{
//                "Content-Type":"application/json"
//             },
//          })
//          .then(function (response) {
//           let newP=response.data.filter((e)=>e.artists===name)
//           setData(newP)
//           console.log(response.data)
//           }).catch(e=>
//               {
//                   console.log(e)
//               })
//     }
