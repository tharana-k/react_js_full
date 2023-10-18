import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const Arraysimpleupdate = () => {

    const [first, setfirst] = useState(["item1","item2","item2"])

const changearray =()=>{
const updatearray =[...first];
updatearray[1] = "update item";
setfirst(updatearray)
    }
  return (
    <div>
      <h1>Array Simple update</h1>
<Button onClick={changearray}>change</Button>

<ul>
{first.map((item)=>

<li>{item}</li>

)}


</ul>

    </div>
  )
}

export default Arraysimpleupdate