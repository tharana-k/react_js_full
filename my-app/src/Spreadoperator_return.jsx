import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
const Spreadoperator_return = () => {
    const [first, setfirst] = useState({name:"jhon",age:"24",place:"kannur",salary:"40000"});
    const change =()=>{
    
        setfirst((prevobj)=>{

            return({...prevobj,salary:50000,age:26});
        })
      
    }
    
      return (
        <div>
    
    <h3>{first.name} {first.age} {first.place} {first.salary}</h3>
    <Button onClick={change}>change</Button>
        </div>
      )
}

export default Spreadoperator_return