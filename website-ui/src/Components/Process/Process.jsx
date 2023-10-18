import React from 'react'
import './Process.css'
import { FaArrowRight } from "react-icons/fa";
function Process() {
 const array=[{title:"Cool Productivity",image:"https://quomodosoft.com/html/hooper/hooper/assets/img/icon/design.png"},
 {title:"Creative Design",image:"https://quomodosoft.com/html/hooper/hooper/assets/img/icon/layers.png"},
 {title:"Responsive Design",image:"https://quomodosoft.com/html/hooper/hooper/assets/img/icon/outline.png"},
 {title:"Fast service",image:"https://quomodosoft.com/html/hooper/hooper/assets/img/icon/layers.png"}

]
  return (
    <>
      <section className="process-area padding-100-50" id="process">
        <div className="container">
            <div className="row flex-v-center">
                <div className="col-md-6 col-xs-12">
                    <div className="process-warapper-content">
                        <div className="row">
{array.map((demo)=>

<>
<div className="col-md-6 col-xs-12">
                                <div className="single-process-box center ">
                                    <div className="process-icon">
                                        <img src={demo.image} alt=""/>
                                    </div>
                                    <h3 className="process-title">{demo.title}</h3>
                                    <a href="#/" className="round-button"><FaArrowRight/></a>
                                </div>
                            </div></>

)}

                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xs-12">
                    <div className="process-content wow fadeInUp sm-mb50 xs-mb50">
                        <div className="area-title wow fadeIn">
                    
                            <h2>3 Steps To A Success Product Business.</h2>
                            <p className="area-line">
                                <img src="https://quomodosoft.com/html/hooper/hooper/assets/img/bg-layers/area-line.png" alt=""/></p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                 
                    </div>
                </div>
            </div>
        </div>
    </section>  


    </>
  )
}

export default Process