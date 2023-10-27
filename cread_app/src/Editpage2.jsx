import React, { useContext } from 'react'
import { Newcontext } from './App'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

const Editpage2 = () => {
    const navigate1=useNavigate()
    const[data,setData] = useContext(Newcontext)

    const {user} = useParams()
    console.log(user)
    const viewdata = data[user]

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
          setinput(data[user]=input)
          navigate1("/")
          console.log("newdata:",input)
       }
  return (
    <div className='container'>
<div className='col-md-6' style={{ margin: "0 auto",
    marginTop: "40px"}}>
<Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={viewdata.name} onChange={handlechange} name='name'  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter age" value={viewdata.age} onChange={handlechange} name='age'  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="text" placeholder="Enter Qulaification" value={viewdata.qualification} onChange={handlechange} name='qualificaion' required/>
      </Form.Group>
<Button type='submit' style={{marginTop:"0px"}}>Edit </Button>

    </Form>
    </div>

        </div>
  )
}

export default Editpage2