import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/slices'


function AddTodo() {
  const dispatch = useDispatch()
  const [input,setInput] = useState("")
  
  const addTOdohandler = (e)=>{
    e.preventDefault()
    const trimmesinput = (input.trim())
    if (trimmesinput==="") return
    dispatch(addTodo(trimmesinput))
    setInput("")
  }
  return (
    <form onSubmit={addTOdohandler}>

      <input type="text" value={input}
      onChange={(e)=>setInput(e.target.value)}
      
      className=' bg-black border border-gray-600 p-2 ' />
      <button type='submit' className=' border border-gray-600 p-2  m-2 '>Submit</button>
    
        
    </form>
  )
}

export default AddTodo
