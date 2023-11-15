import React from 'react'
import './Process.css'
function Process() {
 const array=[{title:"Engineering",para:"Nam eget dui. Etiam rhoncus. Ma ecenas tempus, tellus eget condimentum.",image:"images/faculty-icon1.png"},
 {title:"Business Studies",para:"Nam eget dui. Etiam rhoncus. Ma ecenas tempus, tellus eget condimentum.",image:"images/faculty-icon2.png"},
 {title:"Health Sciences",para:"Nam eget dui. Etiam rhoncus. Ma ecenas tempus, tellus eget condimentum.",image:"images/faculty-icon3.png"},
 {title:"Law & Legal Studies",para:"Nam eget dui. Etiam rhoncus. Ma ecenas tempus, tellus eget condimentum.",image:"images/faculty-icon4.png"}

]

const backgroundColors = ['#9747ff', '#417cd4', '#ec732f', '#ed4883'];
  return (
    <>
      <section className="process-area padding-100-50" id="process">
        <div className="container-fluid">
      
    
                    <div className="process-warapper-content">
                        <div className="row">
                        <div className="col-md-12 col-xs-12">
                        <div className="contents">
                    <h6>POPULAR FACULTY</h6>
                    <h2>Popular Faculty Areas <br></br>of Study</h2>
                    </div>
                    </div>
{array.map((demo,index)=>

<>

<div className="col-md-6 col-lg-3">

                                <div className="single-process-box center ">
                                    <div className="process-icon" style={{backgroundColor:backgroundColors[index]}}>
                                        <img src={demo.image} alt=""/>
                                    </div>
                                    <h3 className="process-title">{demo.title}</h3>
                                    <p>{demo.para}</p>
                                
                                </div>
                            </div></>

)}

                        </div>
              
                </div>
               
        
        </div>
    </section>  


    </>
  )
}

export default Process