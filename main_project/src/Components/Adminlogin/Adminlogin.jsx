import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Adminlogin.css'
import { useNavigate } from 'react-router-dom'
import { newcontext1 } from '../../App'
const Adminlogin = () => {
    const navigate = useNavigate()
    const {adminData} = useContext(newcontext1);

    const [username, setusername] = useState("")

    const [password, setpassword] = useState("")
    
    const updateuname = (event) =>{
        setusername(event.target.value);
    }
    
    const updatepassword =(event)=>{
        setpassword(event.target.value);
    }
    
;
    const handlesubmit = (event) =>{
       event.preventDefault();
       console.log("username:",username);
       console.log("password:",password);
       if(username==adminData.uname && password==adminData.pswrd){
        navigate("/details");
       }
       else{
        alert("Incorrect username or password")
       }
   
    }
    
    
    
      return (
        <section className='login-form'>
        <div className='container' >
        <div className='col-md-8'  style={{margin:"0 auto"}}>
      <Form onSubmit={handlesubmit} >
     
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text"  style={{ height: '54px' }} placeholder="Enter username" value={username} onChange={updateuname}  required/>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" style={{ height: '54px' }} placeholder="Enter Password" value={password} onChange={updatepassword}   required/>
          </Form.Group>
        
    
        <br></br>
    <Button className='homesub' type='submit' style={{marginTop:"0px"}}>Submit</Button>
    
        </Form>
        </div>
        </div> 
        </section>
     
      )
    }
    

export default Adminlogin