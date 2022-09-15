import React, { useState } from 'react'
import TODO from './TODO';

export default function TodoApp() {
    const [inputText ,setInoputText] =useState('');
    const [list ,setList] =useState([]);
    function inputchange(e){
        // console.log(e.target.value);
        setInoputText(e.target.value);
    }
    function handelsubmit(e){
    //    setList(...list ,{
    //      text:inputText,
    //    })
    setList([...list, {
        text:inputText,
    }]);
        e.preventDefault();
    }
    // console.log(list)
    
  return (
    
    <div>
        <form onSubmit={(event)=>handelsubmit(event)}>
            <input type={"text"} placeholder={"type todo"}  onChange={(event)=>inputchange(event)}/>
            <button type='submit'> submit</button>
        </form>
        <div>
           
                
            { list.map((element)=>
                
                (<TODO  element={element}/>)
             ) 

            } 
           
            
        </div>
      
    </div>
  )
}
