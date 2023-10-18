import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Usestate4 = () => {
const[first,usefirst]=useState("tharana")



  return (
    <div>
      <h1>Simple string update...</h1>
<h4>My name is {first}</h4>
<Button onClick={()=>usefirst("kavya")}>Button </Button>


    </div>
  )
}

export default Usestate4