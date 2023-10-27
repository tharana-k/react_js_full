import React from 'react'
import { useState } from 'react'
import { Button, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

const Loginform = () => {

const [username, setusername] = useState("")
const [password, setpassword] = useState("")
const [email, setemail] = useState("")
const [radval, setradval] = useState("")
const [checkbx1, setcheckbx1] = useState(false)
const [checkbx2, setcheckbx2] = useState(false)
const [selected, setselected] = useState("")

const updateuname = (event) =>{
    setusername(event.target.value);
}

const updatepaswrd = (event) =>{
    setpassword(event.target.value);
}

const updateemail =(event)=>{
    setemail(event.target.value);
}

const updateradval =(event)=>{
    setradval(event.target.value);
}

const updatecheckbx1 =(event)=>{
    setcheckbx1(event.target.checked);
}

const updatecheckbx2 =(event)=>{
    setcheckbx2(event.target.checked);
}

const updateselected=(event)=>{
    setselected(event.target.value);
}



const handlesubmit = (event) =>{
   event.preventDefault();
   console.log("username:",username);
   console.log("password:",password);
   console.log("email:",email);
   console.log("radio value:",radval);
   console.log("checkbox value1:",checkbx1);
   console.log("checkbox value2:",checkbx2);
   console.log("selectbox value:",selected);
}


const formCheck = {
    display: "inline-block",
    paddingRight:"20px"


}
  return (
    <div className='container' >
      <div className='col-md-6' style={{margin :"0 auto", paddingTop: "40px" }}> 
  <Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={updateuname}  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" value={password} onChange={updatepaswrd}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={updateemail} />
      </Form.Group>
      <Form.Label>Select option</Form.Label><br></br>
      <Form.Group>
        <Form.Check style={formCheck} name='option' type="radio" label="option1" value="option1"  checked={radval === "option1"} onChange={updateradval}/>
        <Form.Check style={formCheck}  name='option'  type="radio" label="option2"  value="option2"  checked={radval === "option2"}   onChange={updateradval}/>
        <Form.Check style={formCheck}  name='option'  type="radio" label="option3" value="option3"   checked={radval === "option3"}    onChange={updateradval}/>
      </Form.Group>

      <Form.Group>
      <Form.Label>Select checkbox</Form.Label><br></br>
        <Form.Check style={formCheck}  type="checkbox" label="checkbox1"  checked={checkbx1} onChange={updatecheckbx1}/>
        <Form.Check style={formCheck}  type="checkbox" label="checkbox2"  checked={checkbx2} onChange={updatecheckbx2}/>
      </Form.Group>


      <Form.Group>
      <Form.Label>Select an option</Form.Label><br></br>
        <Form.Select value={selected} onChange={updateselected}>
<option value="option1">option1</option>
<option value="option2">option2</option>
<option value="option3">option3</option>

        </Form.Select>
      </Form.Group>

      {/*<ToggleButtonGroup type="radio" name="options" value={radval} onChange={updateradval}>
        <ToggleButton id="tbg-radio-1" value={1}>
          Radio 1 
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Radio 2
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Radio 3
        </ToggleButton>
      </ToggleButtonGroup>*/}<br></br>
<Button type='submit' style={{marginTop:"0px"}}>Login </Button>

    </Form>
    </div> 

    </div>
  )
}

export default Loginform