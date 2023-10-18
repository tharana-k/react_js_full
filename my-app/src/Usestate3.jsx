import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Usestate3 = () => {
const [first, setfirst] = useState("black")

const changered =()=>{
    setfirst("red")
}
const changegreen =()=>{
    setfirst("green")
}
const changeyellow =()=>{
    setfirst("yellow")
}

const changebrown =()=>{
    setfirst("brown")
}
const textcolor ={
    color:first
}


  return (
    <div>
<h1 style = {textcolor}>colour is {first}</h1>
<Button className='btn-danger' onClick={changered}>Red</Button>
<Button className='btn-success' onClick={changegreen}>Green</Button>
<Button className='btn-warning' onClick={changeyellow}>yellow</Button>
<Button onClick={changebrown}>brown</Button>
    </div>
  )
}

export default Usestate3