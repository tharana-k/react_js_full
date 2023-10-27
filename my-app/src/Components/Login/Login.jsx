import React from 'react'
import { useState } from 'react'
import { Button, Form,  } from 'react-bootstrap'
import './Login.css'
import { CiUser } from 'react-icons/ci';
import { PiPasswordThin } from 'react-icons/pi';

const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const [checkbx1, setcheckbx1] = useState(false)



    const updateuname = (event) => {
        setusername(event.target.value);
    }

    const updatepaswrd = (event) => {
        setpassword(event.target.value);
    }



    const updatecheckbx1 = (event) => {
        setcheckbx1(event.target.checked);
    }







    const handlesubmit = (event) => {
        event.preventDefault();
        console.log("username:", username);
        console.log("password:", password);

        console.log("checkbox value1:", checkbx1);

    }


    const formCheck = {
        display: "inline-block",
        paddingRight: "20px"


    }
    return (
        <div className='container' >
            <div className='col-md-9' style={{ margin: "30px auto" }}>

                <div className="AppForm shadow-lg">
                    <div className='row d-flex'>


                        <div className='col-md-6 d-flex justify-content-center align-items-center' style={{ paddingTop: "40px" }}>
                            <div className="AppFormLeft">
                                <h1>Login</h1>

                                <Form onSubmit={handlesubmit}>
                                    <Form.Group className="mb-3 d-flex field" controlId="formGroupEmail">
                                        <Form.Control className='border-top-0 border-right-0 border-main border-left-0 rounded-0 shadow-none' type="text" placeholder="Enter username" value={username} onChange={updateuname} required />
                                   <CiUser/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 d-flex field" controlId="formGroupPassword">
                                        <Form.Control className='border-top-0 border-right-0 border-main border-left-0 rounded-0 shadow-none' type="password" placeholder="Enter Password" value={password} onChange={updatepaswrd} />
                                    <PiPasswordThin/>
                                    </Form.Group>


                                    <Form.Group className='d-flex1'>
                                        <Form.Check style={formCheck} type="checkbox" label="Remember Me" checked={checkbx1} onChange={updatecheckbx1} />
                                        <a href='./'>Forgot Password ?</a>
                                    </Form.Group>




                                    <br></br>
                                    <Button className='btn btn-success btn-block shadow border-0 py-2 text-uppercase' type='submit' style={{ marginTop: "0px" }}>Login </Button>
                                    <p className="text-center mt-5">
                                        Don't have an account?    <a href='./'><span> Create your account</span></a> </p>

                                </Form>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='AppFormRight position-relative d-flex justify-content-center flex-column align-items-center text-center p-5 text-white'>
                                <h2 className="position-relative">Welcome</h2>
                                <p>Lorem ipsuing elit. Molomos totam est voluptatum i omos totam est voluptatum i ure sit consectetur ill</p>
                            </div>

                        </div>


                    </div>
                </div>

            </div>



        </div>
    )
}

export default Login