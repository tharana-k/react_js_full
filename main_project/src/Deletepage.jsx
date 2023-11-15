import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Newcontext } from './App'
import { Button } from 'react-bootstrap'

const Deletepage = () => {

    const[data,setData] = useContext(Newcontext)

    const {user} = useParams()
    const navigate2 = useNavigate()
    console.log(user)
    const viewdata = data[user]

const handledelete =()=>{
const Delete=data.filter((_,i)=>i != user)
//1st parameter cant be empty in the function so anything can be given.here underscore is given.any variable can be given.
setData(Delete)
navigate2(-1)
}

  return (
    <section className='detail-wrap'>
    <div className='container-fluid'>
<div className='col-md-8 login-forms' style={{ margin: "0 auto"
  }}>
<h1>Are You sure you want to delete?</h1>
<Button  className='sub' onClick={()=>navigate2(-1)}>cancel</Button>
<Button  className='sub'onClick={handledelete}>Delete</Button>
    </div>
    </div>
    </section>
  )
}

export default Deletepage