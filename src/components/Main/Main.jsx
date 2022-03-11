
import React, { useState,useEffect } from 'react';
import axios from "axios";
import { Songs } from '../Songs/Songs';

export const Main = () => {

    const [list,setList] = useState([]);

    // useEffect(() => {
    //   let obj = {
    //     url : "https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json",
    // };
    //   axios(obj)
    //   .then((result) =>  result.json())
    //   .then((result) => {
    //       console.log("result.data=",result)
    //       setList(result.data)
    //   })
    //   .catch(e => console.log(e))   
    // }, [])
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
          });
      };
    

  return (
    <div>
        {
           list.map((ele,index) => {
               console.log("ele=",ele)
               return (
                   <Songs key={index} data={ele} />
               )
           }) 
        }
    </div>
  )
}

