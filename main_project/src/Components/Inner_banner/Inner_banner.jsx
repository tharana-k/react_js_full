import React from 'react'
import'./Inner_banner.css'
import { Link } from 'react-router-dom'
const Inner_banner = ({ text }) => {

    return (
        <>
        <section className='banner welcome-text-area inner-banner'>
        <div className='container-fluid'>
    <div className='row align'>
    <div className='col-md-4 relative'>
    <img src="images/arrow.png" className="img-fluid arrow-img" alt="robot"/>
        <div className='welcome-text'>

    <h1>{text}
    </h1>
    <h6 className='inner-link'><Link to="/">
    <span className='top-subhidding'>Home</span></Link> / {text}</h6>

    
    </div>
    </div>
    <div className='col-md-8'>
        <div className="home-img ">
       <img src="images/studentbanner.jpg" className="img-fluid inner-image" alt="robot"/>
                    </div>
    </div>
    
    

    </div>
        </div>
    
        </section>
        
        </>
      )
    }

export default Inner_banner