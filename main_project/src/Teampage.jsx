import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Newcontext } from './App'

const Teampage = () => {
    const[data,setData] = useContext(Newcontext)
  return (
    <section className='team-main' style={{padding:"60px 0"}}>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-4'>
    <div className='home-button ' >
    <Link style={{paddingRight: "50px",marginBottom:"47px",marginTop:"0"}} to="/Createpage">
                    Add new Members</Link>
                    </div>
</div>
<div className='col-md-4'>

</div>
<div className='col-md-4'>
</div>
        {data.map(( demo,ind)=>
            <div className='col-md-3'>
     
     <img className="img-fluid" src={demo.image} alt="Uploaded" />
    
    
            <div className='details'>
            <h5 className='name'>{demo.name} </h5>
            <h6 className='desig'><span style={{color:"#000"}}>Designation : </span>{demo.desig} </h6>
            <h6 className='desig'><span style={{color:"#000"}}>Phone : </span>{demo.phone} </h6>
            <h6 className='desig'><span style={{color:"#000"}}>Email : </span>{demo.email} </h6>
            <h6 className='desig'><span style={{color:"#000"}}>Post to which applying : </span> {demo.course} </h6>
            <Link className='homesub' to={`/Updatepage/${ind}`}>
                    update details</Link>
                    <Link className='homesub1' to={`/deletepage/${ind}`}>
                    Delete person</Link>
            </div>
          </div>
         
    
        )}
  
    </div>
    </div>
    </section>
  )
}

export default Teampage