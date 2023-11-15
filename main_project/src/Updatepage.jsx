
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
<Button className='homesub' type='submit' style={{marginTop:"0px"}}>Update details</Button>

    </Form>
    </div>

        </div>
        </section>
  )
}
export default Updatepage