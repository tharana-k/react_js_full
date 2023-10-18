import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Ternaryoperatorbackground = () => {
    const [showtext, setshowtext] = useState(false)
    const bg ={
        backgroundColor:"black" 
    }
    const bg1 ={
        backgroundColor:"white" 
    }
  return (
    <div  style={showtext?bg1:bg}>
    <h1>Ternary operator example.....4</h1>
    {showtext?<h2>Light mode</h2>:<h2 style={{color:"white"}}>Dark mode</h2>}
    <Button onClick={()=>setshowtext(!showtext)}>{showtext?"Lightmode":"Darkmode"}</Button>
    <br></br>
        </div>
  )
}

export default Ternaryoperatorbackground