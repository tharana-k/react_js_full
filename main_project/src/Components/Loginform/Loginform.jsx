import React from 'react'
import { useState } from 'react'
import { Button, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import './Loginform.css'
const Loginform = () => {

const [username, setusername] = useState("")

const [email, setemail] = useState("")
const [message, setmessage] = useState("")

const updateuname = (event) =>{
    setusername(event.target.value);
}

const updateemail =(event)=>{
    setemail(event.target.value);
}

const updatemessage =(event)=>{
    setmessage(event.target.value);
}
const handlesubmit = (event) =>{
   event.preventDefault();
   console.log("username:",username);
   console.log("email:",email);
   console.log("message:",message);
}



  return (
    <div >

  <Form onSubmit={handlesubmit} className='form-sec'>
  <h4 >Have Questions? Contact Bridge Admissions Now!</h4>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  style={{ height: '54px' }} placeholder="Enter username" value={username} onChange={updateuname}  required/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" style={{ height: '54px' }} placeholder="Enter email" value={email} onChange={updateemail}   required/>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Message</Form.Label>
        <Form.Control  as="textarea" style={{ height: '54px' }}  placeholder="Enter Message"  value={message} onChange={updatemessage}   required/>
      </Form.Group>
    <br></br>
<Button className='homesub' type='submit' style={{marginTop:"0px"}}>Send your question </Button>

    </Form>
    </div> 

 
  )
}

export default Loginform