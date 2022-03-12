
import React, { useState,useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Songs } from '../Songs/Songs';
import styled from "./Main.module.css";

export const Main = () => {

    const [list,setList] = useState([]);
    const [data,setData] = useState([]);

    useEffect(() => {
        handleMusic();
      }, []);
    
      const handleMusic = async () => {
        await fetch(
          `https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json`
        )
          .then((res) => res.json())
          .then((d) => {
            setList(d);
            setData(d);
          });
      };    
      const handleSearch = (data) => {
        console.log("handle= ",data)
          handleArtist(data);
      }
const handleArtist=(name)=>
    {
          let newP = data.filter((e)=>e.artists===name)
          console.log("dataeer",newP,name);
          if(newP.length === 0) {
            newP = data
          }
          setList(newP)
    }

  return (
      <>
    <Navbar handleSearch={handleSearch}/>

    <div className={styled.container}>
        {
           list.map((ele,index) => {
               console.log("ele=",ele)
               return (
                   <Songs key={index} data={ele} />
               )
           }) 
        }
    </div>
    </>
  )
}

