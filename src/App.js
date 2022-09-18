import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef, useReducer } from "react";
import Moviecard from "./component/Moviecard";
import Moviediv from "./component/Moviediv";
import NotFound from "./component/Notfound";

function App() {
  const [placeholderSearch, setPlaceholderSearch] = useState(
    "search by show  name"
  );
  const [searchBy, setSearchBY] = useState("false");
  const [inputSearch, setInputSearch] = useState("");
  const [dataState, setDataState] = useState([]);
  const [errorMsg ,setErrorMsg] = useState("");
  let obj = [];

  function handelOnChange(event) {
    if (event.target.value === "") {
      // setInputSearch("all");
      setErrorMsg('pls enter something');
      setInputSearch(event.target.value);
      // setInputSearch("all");
    } else {
      setInputSearch(event.target.value);
      setErrorMsg('');
    }
  }
  // console.log(inputSearch);
  function handelChangeRadio(event) {
    setSearchBY(event.target.value);
   
  }

  function handelActorFunction(data) {
    // console.log("handel Actor Function working");
    console.log(data);
    
   
      setDataState(data);
    
   
  }
  function handelShowFunction(data) {
    console.log(data);
    setDataState(data);
   
  }

  // for having state change useEffect
  useEffect(() => {
    if (searchBy === "true") {
      const url = `https://api.tvmaze.com/search/people?q=${inputSearch}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          
          // data?.map((element,index)=>{
          //   let actorId = element.length === 0 ? 0 : data[index].person.id;
          //   if (actorId !== 0) {
          //       fetch(
          //         `https://api.tvmaze.com/people/${actorId}/castcredits?embed=show`
          //       )
          //         .then((res) => res.json())
          //         .then((data) => {
          //           // console.log(data)
          //           // data.length === 0 ? (setDataState([...obj])):
          //           //     setDataState([...obj,data])});
                    
          //           data.length === 0 ? (obj = [...obj]): (obj = [...obj,data])});
          //     }
          //     else {
          //       const emptydata = [...obj]
          //     }
          //     // console.log(obj)
             
          // })
          // handelActorFunction(obj);
          // obj=[];
          const actorId = data.length === 0 ? 0 : data[0].person.id;
          if (actorId !== 0) {
            fetch(
              `https://api.tvmaze.com/people/${actorId}/castcredits?embed=show`
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data)
                data.length === 0 ? (handelActorFunction([])):
                    handelActorFunction(data)});
          }
          else {
            const emptydata = []
            handelActorFunction(emptydata);
          }
        });
    } else if (searchBy === "false") {
      const url2 = `https://api.tvmaze.com/search/shows?q=${inputSearch}`;
      // console.log(url2);
      fetch(url2)
        .then((res) => res.json())
        .then((data) => handelShowFunction(data));
    }
  }, [searchBy, inputSearch]);

  //   for starting all shows to be given
  useEffect(() => {
    const url = `https://api.tvmaze.com/search/shows?q=all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => handelShowFunction(data));
  }, []);

  return (
    <>
      <div className="body">
        <div className="firstview">
          <div className="searchContainer">
            <h1>TV-MAZE</h1>
            <form>
              <input
                type="radio"
                value="true"
                name="searchOption"
                
                onChange={handelChangeRadio}
              />
              search by actor
              <input
                type="radio"
                value="false"
                name="searchOption"
                defaultChecked
                onChange={handelChangeRadio}
              />
              search by show
              <br></br>
              <input
                type="text"
                onChange={(event) => handelOnChange(event)}
                placeholder={placeholderSearch}
              />

              <br></br>
              <p>{errorMsg}</p>
            </form>
          </div>
          <div className="showsContainer">
            {dataState.length === 0 ? (
              <NotFound />
            ) : (
              dataState.map((element, index, ) => (
                <Moviecard
                  index={index + 1}
                  element={element}
                  key={index + 1}
                  searchBy={searchBy}
                />
              ))
            )}
            {/* {(dataState.map((element,index)=>(  
          <Moviecard  index={index+1} element={element} key={index+1}/>
         )))} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
