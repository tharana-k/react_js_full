import React, { useContext} from 'react'
import {newcontext } from './App'
import { useNavigate} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'

export const Createstudentpage = () => {
    const navigate1=useNavigate()
    const[studata,setstudata] = useContext(newcontext)
const [input,setinput] = useState({
  image:"",
    name:"",
    desig:""
})

const handleImageChange = (e) => {
  const file =URL.createObjectURL(e.target.files[0])
  console.log('File:', file);
    setinput({ ...input, image: file});

};


console.log(input);
    const handlechange=(e)=>{
     setinput({...input,[e.target.name]:e.target.value})
    }

    
    console.log(input);
        const handlesubmit = (e) =>{
          e.preventDefault();
          const New=[...studata,input]
          setstudata(New)
          alert("Registration successful")
          navigate1(-1)
  
       }
  return (
    <section className='detail-wrap'>
    <div className='container-fluid'>
<div className='col-md-8 login-forms' style={{ margin: "0 auto"}}>
<Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={handleImageChange} />

      </Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter username"  onChange={handlechange} name='name'  required/>
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter designation" onChange={handlechange} name='desig' required/>
      </Form.Group>
<Button className='homesub' type='submit' style={{marginTop:"0px"}}>Register</Button>

    </Form>
    </div>

        </div>
        </section>
  )
}

