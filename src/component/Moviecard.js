import React, { useEffect, useState } from "react";
import style from "./Moviecard.modules.css";
import logo from "../logo.svg"

export default function Moviecard(props) {
  
  const { index, element,  searchBy } = props;
  const imasrc = logo;
  const [cardInfo,setCardInfo] =useState({
     name : "",
   language : "",
   imageUrl : "",
   rating: ""
  })
  
  
  // console.log(searchBy);
  useEffect(()=>{
    
//  { if (searchBy === "true" && element._embedded.show.image != null) {
//     const obj ={
//     name : element._embedded.show.name,
//     language : element._embedded.show.language,
//     imageUrl : element._embedded.show.image.medium,
//     rating: element._embedded.show.rating.average
//     }
//     setCardInfo(obj);
//     // console.log("actor");
//   }
//    else if(searchBy === "false" && element.show.image != null){
//     const obj ={
//       name : element.show.name,
//       language : element.show.language,
//       imageUrl : element.show.image.medium,
//       rating: element.show.rating.average
//       }
//       setCardInfo(obj);
//     // name =show.name;
//     // language = show.language;
//     // imageUrl = show.image.medium;
//     // console.log("actor");
//   }}
if(searchBy === "true"){
  const name = element._embedded.show.name;
  const language = element._embedded.show.language;
  const imageUrl = element._embedded.show.image? (element._embedded.show.image.medium):(imasrc);
  setCardInfo({
    name : name,
      language :language,
      imageUrl : imageUrl,
      rating: element._embedded.show.rating.average

  })
  
}
else if(searchBy === "false"){
  const name = element.show.name;
  const language = element.show.language;
  const imageUrl = element.show.image? (element.show.image.medium):(imasrc);
  setCardInfo({
    name : name,
      language :language,
      imageUrl : imageUrl,
      rating: element.show.rating.average

  })
}
  // console.log(element);
  // const image = element.show.image.medium;
}, []);

  return (   
  
    <div className="card">
      <img src={cardInfo.imageUrl? (cardInfo.imageUrl):(imasrc)}  />
      <div>
        <p className="show name"> <strong>Name:- </strong>{ cardInfo.name}</p>
        <p className="language"><strong>Language:- </strong>{ cardInfo.language}</p>
        <p className="language"><strong>Rating:- </strong>{ cardInfo.rating? (cardInfo.rating):'not applied'}</p>
      </div>
    </div>
  );
}
