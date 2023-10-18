import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Spread_addobjects = () => {
const [first, setfirst] = useState([{car:"bmw",color:"black"},{car:"ford",color:"white"}])
const obj ={car:"baleno",color:"red"};
const array2 =[{car:"maruthi",color:"white"},{car:"thar",color:"red"}]
const update =()=>{
setfirst([...first,obj])
}

const update1 =()=>{
    setfirst([...first,...array2])
    }
  return (
    <div>
<table>
    <tr>
         <th>car</th>  
         <th>colour</th> 
    </tr>
   
{first.map((demo)=>
<tr>
<td>{demo.car}</td>
<td>{demo.color}</td>
</tr>
)}
<Button onClick={update}>Add data</Button>
<Button onClick={update1}>Add data</Button>


</table>



    </div>
  )
}

export default Spread_addobjects