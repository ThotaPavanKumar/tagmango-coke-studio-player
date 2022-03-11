
import React from 'react'
import styled from "./Song.module.css";
import { BsPlayFill } from "react-icons/bs";


export const Songs = ({data}) => {
    const {song,url,artists,cover_image} = data;

    const handlePlay = (e) => {
        console.log("e=",e);
        
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


