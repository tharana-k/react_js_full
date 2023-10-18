
import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { newcontext } from './Context_provider'

const Usestate1 = () => {
  const display = useContext(newcontext)
  const {first1} = display

const[first,usefirst]=useState("tharana")

const change = () => {
    usefirst("kavya")
}

  return (
    <div>
      <h1>usecontext value copying</h1>
      <h1>My name is {first1}</h1>


      
<h1>My name is {first}</h1>
<Button onClick={change}>Button </Button>


    </div>
  )
}

export default Usestate1