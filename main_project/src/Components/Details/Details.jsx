import React from 'react'
import { Link } from 'react-router-dom'
import './Details.css'
const Details = () => {
  return (
    <section className='detailss'> 
     <div className='container-fluid'> 
     <div className='row'> 
     <div className='col-md-6 '> 

         <Link to="/Teampage" className="action-button">View Faculty Details</Link>                         
       </div>
       <div className='col-md-6'> 

         <Link to="/Studentpage" className="action-button">View Student Details</Link>                         

       </div>
       </div>
       </div>  
    </section>
  )
}

export default Details