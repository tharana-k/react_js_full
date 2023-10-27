import React, { useContext } from 'react'
import { Newcontext } from './App'
import { useNavigate} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'

export const Createpage = () => {
    const navigate1=useNavigate()
    const[data,setData] = useContext(Newcontext)

const [input,setinput] = useState({
    name:"",
    age:"",
    qualification:""
})

    const handlechange=(e)=>{
     setinput({...input,[e.target.name]:e.target.value})
    }
    
    console.log(input);
        const handlesubmit = (e) =>{
          e.preventDefault();
          const New=[...data,input]
          setData(New)
          navigate1(-1)
  
       }
  return (
    <div className='container'>
<div className='col-md-6' style={{ margin: "0 auto",
    marginTop: "40px"}}>
<Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>username</Form.Label>
        <Form.Control type="text" placeholder="Enter username"  onChange={handlechange} name='name'  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter age"  onChange={handlechange} name='age'  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="text" placeholder="Enter Qulification" onChange={handlechange} name='qualification' required/>
      </Form.Group>
<Button type='submit' style={{marginTop:"0px"}}>Add</Button>

    </Form>
    </div>

        </div>
  )
}
