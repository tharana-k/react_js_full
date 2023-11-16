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
    desig:"",
    phone:"",
    email:"",
    course:""
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
  
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={handleImageChange} />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmails">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter username"  onChange={handlechange} name='name'  required/>
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="text" placeholder="Enter qualification" onChange={handlechange} name='desig' required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail1">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel"  maxlength="10"
    pattern="[0-9]*"
    title="Please enter a valid phone number"
    oninput="this.value = this.value.replace(/[^0-9]/g, '');"  placeholder="Enter Phone number"  onChange={handlechange} name='phone'  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Mail ID"  onChange={handlechange} name='email'  required/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Course to which applying</Form.Label><br></br>
        <Form.Select name='course'  onChange={handlechange} required>
        <option value="Select course">Select course</option>
<option value="Engineering">Engineering</option>
<option value="Business Studies">Business Studies</option>
<option value="Health Sciences">Health Sciences</option>
<option value="Law & Legal Studies">Law & Legal Studies</option>
        </Form.Select>
      </Form.Group>
<Button className='homesub' type='submit' style={{marginTop:"0px"}}>Register</Button>

    </Form>
    </div>

        </div>
        </section>
  )
}

