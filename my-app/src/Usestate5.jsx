import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Usestate5 = () => {
const[first,usefirst]=useState([{name:"harsha",place:"bnglre"},{name:"teena",place:"chennai"}])
const change =()=>{
  const updateitem = [...first]
    updateitem[1].name = "arpitha"
    usefirst( updateitem)
}


  return (
    <div>
        
        {first.map((demo)=>
    <>
<h1>My name is {demo.name} </h1>
 <Button onClick={change}>Button </Button>

</>
)}


    </div>
  )
}

export default Usestate5