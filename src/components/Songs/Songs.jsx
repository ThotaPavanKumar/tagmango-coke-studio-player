
import React, { useState } from 'react'
import styled from "./Song.module.css";
import { BsPlayFill } from "react-icons/bs";
import { Navigate } from 'react-router-dom';


export const Songs = ({data}) => {
    const {song,url,artists,cover_image} = data;
    const [flag,setFlag] = useState(false);
    

    const handlePlay = (e) => {
        localStorage.removeItem("song");
        if (localStorage.getItem("song") === null) {
          localStorage.setItem("song", JSON.stringify(e));
        }
        setFlag(true);
      };
     
    if(flag) {
       return  <Navigate  to="/songdetails" />    

    }

  return (
    <div className={styled.songs}>
        <div className={styled.image}>
            <img src={cover_image} alt={song} />
            <div className={styled.playbtn} onClick={() => handlePlay(data)}>
                <BsPlayFill className={styled.playimg}/>
            </div>
          
            <div className={styled.text}>
                <h3>{song}</h3>
                <h4>{artists}</h4>
            </div>
        </div>
    </div>
  )
}


