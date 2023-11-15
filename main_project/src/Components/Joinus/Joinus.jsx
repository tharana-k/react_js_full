import React from 'react'
import './Joinus.css'
import { Link } from 'react-router-dom'
const Joinus = () => {
    return (
        <section className='joinnow'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div class="join-box center ">
                            <div className='box-img1'>
                                <img className='img-fluid' src="images/join1.png" alt="img"/>
                                </div>
                                <div className='box-content'>
                                    <h3 class="process-title">
                                    Do You Want To Teach Here?</h3>
  <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us!</p>
                                        </div>   
                                        <div className="header-call-to-action ">
         <Link to="/Createpage" className="action-button">Register Now</Link>                         
       </div>
                                        </div> 
                    </div>
                    <div className='col-md-6'>
                    <div class="join-box center ">
                            <div className='box-img1 box-img2'>
                                <img className='img-fluid' src="images/join2.png" alt="img"/>
                                </div>
                                <div className='box-content'>
                                    <h3 class="process-title">
                                    Want To Learn Something New?</h3>
  <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us!</p>
  
  </div> 
  <div className="header-call-to-action ">
         <Link to="/Createstudentpage" className="action-button">Register Now</Link>                         
       </div>
                                        </div>  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Joinus