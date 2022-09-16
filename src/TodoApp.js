import React, { useState } from "react";
import TODO from "./TODO";
import Editform from "./Editform";

export default function TodoApp() {
  const [inputText, setInoputText] = useState("");
  const [list, setList] = useState([]);
  const [editText ,setEditText] = useState(false);
  function inputchange(e) {
    // console.log(e.target.value);
    setInoputText(e.target.value);
  }
  function handelsubmit(e) {
    e.preventDefault();
    if (inputText !== "") {
      const id = new Date().getTime();
      setList([
        ...list,
        {
          text: inputText,
          id: id,
        }
      ]);
      setInoputText("");
    }
  }
  // console.log(list)
  function deletefun(identifier){
    // const {identifier }= props;
    console.log(identifier);
    let newList =[];
    list.map((element)=>{if(element.id !== identifier){
         newList = [...newList ,element];
    }})
    setList(newList);


  }
  function editFun(identifier){
     console.log(identifier +" hi ");

    setEditText(true);
  }

  return (
    <div>
      <form onSubmit={(event) => handelsubmit(event)}>
        <input
          type={"text"}
          placeholder={"type todo"}
          value={inputText}
          onChange={(event) => inputchange(event)}
          
        />
        <button type="submit"> submit</button>
      </form>
      <div>
        
        {list.map((element) => (
            <>
          <TODO element={element} identifier={element.id } deletefun={deletefun} key={element.id} editFun={editFun} />
             {{editText} && <Editform /> }
           </>
        ))}

      </div>
    </div>
  );
}
