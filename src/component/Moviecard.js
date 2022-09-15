import React, { useEffect, useState } from "react";
import style from "./Moviecard.modules.css";

export default function Moviecard(props) {
  
  const { index, element,  searchBy } = props;
  const [cardInfo,setCardInfo] =useState({
     name : "",
   language : "",
   imageUrl : ""
  })
  
  
  // console.log(searchBy);
  useEffect(()=>{
    
 { if (searchBy === "true" && element._embedded.show.image != null) {
    const obj ={
    name : element._embedded.show.name,
    language : element._embedded.show.language,
    imageUrl : element._embedded.show.image.medium
    }
    setCardInfo(obj);
    // console.log("actor");
  }
   else if(searchBy === "false" && element.show.image != null){
    const obj ={
      name : element.show.name,
      language : element.show.language,
      imageUrl : element.show.image.medium
      }
      setCardInfo(obj);
    // name =show.name;
    // language = show.language;
    // imageUrl = show.image.medium;
    // console.log("actor");
  }}
  // console.log(element);
  // const image = element.show.image.medium;
}, []);

  return (
    <div className="card">
      <img src={cardInfo.imageUrl} alt="image" />
      <div>
        <p className="show name">{ cardInfo.name}</p>
        <p className="language">{ cardInfo.language}</p>
      </div>
    </div>
  );
}
