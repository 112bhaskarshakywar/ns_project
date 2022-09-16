import { useState } from "react";
import React from 'react'


export default function Editform() {
    const [inputText, setInoputText] = useState("");
  function inputchange(e) {
    console.log(e.target.value);
    setInoputText(e.target.value);
  }
  return (
    <div>
        <input
          type={"text"}
          placeholder={"edit todo"}
        //   value={inputText}
          onChange={(event) => inputchange(event)}
          
        />
        <button type="submit"> save</button>
      
    </div>
  )
}
