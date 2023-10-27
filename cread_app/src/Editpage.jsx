import React, { useContext } from 'react'
import { Newcontext } from './App'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

const Editpage = () => {
  const navigate1=useNavigate()
    const[data,setData] = useContext(Newcontext)

    const {user} = useParams()
    console.log(user)
    const viewdata = data[user]

    const updatename=(event)=>{
      const updatearray =[...data];   
      updatearray[user].name = event.target.value;
      setData(updatearray);
  }
  const updateage=(event)=>{
    const updatearray1 =[...data];   
    updatearray1[user].age = event.target.value;
    setData(updatearray1);

}
  const updatequal=(event)=>{
    const updatearray2 =[...data];   
    updatearray2[user].qualification = event.target.value;
    setData(updatearray2);

}


    const handlesubmit = (event) =>{
      event.preventDefault();
      navigate1("/")
   }
  return (
    <div className='container'>
<div className='col-md-6' style={{ margin: "0 auto",
    marginTop: "40px"}}>
<Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={viewdata.name} onChange={updatename}  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter age" value={viewdata.age} onChange={updateage}  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="text" placeholder="Enter Qulaification" value={viewdata.qualification} onChange={updatequal}  required/>
      </Form.Group>
<Button type='submit' style={{marginTop:"0px"}}>Edit </Button>

    </Form>
    </div>

        </div>
  )
}

export default Editpage