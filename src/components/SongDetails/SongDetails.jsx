
import React, { useState,useEffect } from 'react'
import styled from "../Songs/Song.module.css";
import { BsPlayFill } from "react-icons/bs";

export const SongDetails = () => {
    const [songs,setSongs] = useState("");
    console.log("songs===",songs);

    useEffect(() => {
        const d = JSON.parse(localStorage.getItem("song"));
        console.log("d",d)
        setSongs(d);
      }, []);

      console.log(songs.url);
      return (
          <>
          {songs.url === undefined?"" :
        <div className={styled.songs}>
            <div className={styled.image}>
                <img src={songs.cover_image} alt={songs.song} />
                <div className={styled.playbtn} >
                    <BsPlayFill className={styled.playimg}/>
                </div>
              
                <div className={styled.text}>
                    <h3>{songs.song}</h3>
                    <h4>{songs.artists}</h4>
                </div>
                <div >
                    <audio controls >
                    <source src={songs.url} type="audio/mpeg" />
                </audio>
                </div>
            </div>
        </div>}
        </>
      )
    
}

