
import React, { useContext, useState } from 'react'
import { Newcontext } from './App'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
const Updatepage = () => {
    const navigate1=useNavigate()
    const[data,setData] = useContext(Newcontext)

    const {user} = useParams()
    console.log(user)
    const viewdata = data[user]

const [input,setinput] = useState({
    image:viewdata.image,
    name:viewdata.name,
    desig:viewdata.desig,
    phone:viewdata.phone,
    email:viewdata.email,
    course:viewdata.course
})
const handleImageChange = (e) => {
    const file =URL.createObjectURL(e.target.files[0])
    console.log('File:', file);
      setinput({ ...input, image: file});
  
  };
    const handlechange=(e)=>{
     setinput({...input,[e.target.name]:e.target.value})
    }
    
    console.log(input);
        const handlesubmit = (e) =>{
          e.preventDefault();
          setinput(data[user]=input)
          navigate1(-1)
          console.log("newdata:",input)
       }
  return (
<section className='detail-wrap'>
    <div className='container-fluid'>
<div className='col-md-8 login-forms' style={{ margin: "0 auto"}}>
<Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail1">
      {viewdata.image && (
        <div>
            
          <p>Selected Image:</p><br></br>
          <img className='img-fluid' src={viewdata.image} alt="Selected" />
        </div>
      )}
      <Form.Label>Add a new Image</Form.Label>
        <Form.Control type="file" accept="image/*" name='image'  onChange={handleImageChange} />
       
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={input.name} onChange={handlechange} name='name'  required/>
      </Form.Group>

     
      <Form.Group className="mb-3" >
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Designation" value={input.desig} onChange={handlechange} name='desig' required/>
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Phone</Form.Label>
        <Form.Control type="tel"  maxlength="10"
    pattern="[0-9]*"
    title="Please enter a valid phone number"
    oninput="this.value = this.value.replace(/[^0-9]/g, '');"  placeholder="Enter phonenumber" value={input.phone} onChange={handlechange} name='phone'  required/>
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter phonenumber" value={input.email} onChange={handlechange} name='email'  required/>
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Post to which applying</Form.Label><br></br>
        <Form.Select name='course' value={input.course} onChange={handlechange} required>
        <option value="">Select course</option>
<option value="Lucturer">Lucturer</option>
<option value="Rector">Rector</option>
<option value="Advisor">Advisor</option>

        </Form.Select>
      </Form.Group>

<Button className='homesub' type='submit' style={{marginTop:"0px"}}>Update details</Button>

    </Form>
    </div>

        </div>
        </section>
  )
}
export default Updatepage