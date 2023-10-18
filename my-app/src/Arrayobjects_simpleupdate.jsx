import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Arrayobjects_simpleupdate = () => {

    const [first, setfirst] = useState([{name:"harsh",age:"30"},{name:"ray",age:"20"},{name:"jay",age:"10"}])
    const changearray = () =>{
        const updatearray =[...first];   
        updatearray[0].name = "update item";
        setfirst(updatearray)
    }
  return (
    <div>
     <h1>Array of objects Simple update</h1>       
<Button onClick={changearray}>change</Button>
<ul>
{first.map((item)=>
<>
<li>{item.name}</li>
<li>{item.age}</li>
</>

)}


</ul>

    </div>
  )
}

export default Arrayobjects_simpleupdate