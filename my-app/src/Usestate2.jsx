import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Usestate2 = () => {
const[first,usefirst]= useState(0)


const increment =()=>{ 
 usefirst(first+1)
}

const decrement =()=>{

    if(first <= 0){
alert("not possible");
    }
else{
    usefirst(first-1)

}
}
  return (
    <div>
  <h1>Value is {first}</h1>      
  <Button onClick={increment}>increment</Button>
  <Button onClick={decrement}>decrement</Button>
    </div>
  )
}

export default Usestate2