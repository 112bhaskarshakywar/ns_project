import React from 'react'
import TodoApp from './TodoApp'

export default function TODO(props) {
    const {element ,identifier,deletefun,editFun} = props
    // console.log (identifier);
    
    
  return (
    
    <div>
        <p>{element.text}</p>
        <button onClick={()=>deletefun(identifier)} >delete</button>
       {/* any thing you give here is a event */}
       <button onClick={()=>{
        editFun(identifier)}} >Edit</button>
    </div>
  )
}
