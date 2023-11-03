import React from 'react'
import{ useDispatch, useSelector } from "react-redux"
import { subtractnums,addnums,multiplynums, dividenums}  from './Addnumslice'



export function Displayoperations() {
const display = useSelector((state)=>state.add.sum)
const dispatch = useDispatch()

  return (
    <div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <h4>number1=100,</h4>  
        <h4>number2= 50</h4>
        </div>

        <h1>{display}</h1>
<button onClick={()=>dispatch(addnums())}>Add</button>
<button onClick={()=>dispatch(subtractnums())}>Subtract</button>
<button onClick={()=>dispatch(multiplynums())}>Multiply</button>
<button onClick={()=>dispatch(dividenums())}>Divide</button>
    </div>
  )
}