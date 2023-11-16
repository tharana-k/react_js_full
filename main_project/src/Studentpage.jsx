import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {newcontext } from './App'

const Studentpage = () => {
    const[studata,setstudata] = useContext(newcontext)
    return (
      <section className='team-main' style={{padding:"60px 0"}}>
      <div className='container-fluid'>
      <div className='row'>
      <div className='col-md-4'>
      <div className='home-button ' >
      <Link style={{paddingRight: "50px",marginBottom:"47px",marginTop:"0"}} to="/Createstudentpage">
                      Add new Students</Link>
                      </div>
  </div>
  <div className='col-md-4'>
  
  </div>
  <div className='col-md-4'>
  </div>
          {studata.map(( demo,ind)=>
              <div className='col-md-3'>
       
       <img className="img-fluid" src={demo.image} alt="Uploaded" />
      
      
              <div className='details'>
              <h5 className='name'>{demo.name} </h5>
              <h6 className='desig'><span style={{color:"#000"}}>Qualification : </span>{demo.desig} </h6>
              <h6 className='desig'><span style={{color:"#000"}}>Phone : </span>{demo.phone} </h6>
              <h6 className='desig'><span style={{color:"#000"}}>Email : </span>{demo.email} </h6>
              <h6 className='desig'><span style={{color:"#000"}}>Course to which applying : </span>{demo.course} </h6>
              <Link className='homesub'  to={`/Updatestudentpage/${ind}`}>
                      update Student</Link>
                      <Link className='homesub1'  to={`/Deletestudentpage/${ind}`}>
                      Delete</Link>
              </div>
            </div>
           
      
          )}
    
      </div>
      </div>
      </section>
    )
  }
  

export default Studentpage