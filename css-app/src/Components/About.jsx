import React from 'react'
import {FiSearch } from 'react-icons/fi'
function About() {
  return (
    <div>

<div className="outerdiv">
    <div className="leftwrap">
<h1>Welcome to the website</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus magni ut voluptatem provident ad atque illo amet. 
    odio delectus cum nihil, sapiente nostrum impedit?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus magni ut voluptatem provident ad atque illo amet. 
        odio delectus cum nihil, sapiente nostrum impedit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus magni ut voluptatem provident ad atque illo amet. 
            odio delectus cum nihil, sapiente nostrum impedit?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus magni ut voluptatem provident ad atque illo amet. 
                odio delectus cum nihil, sapiente nostrum impedit?</p>

                <h2 className="text-color">Some highlights...</h2>
                <p>Some text goes here..</p>
                <ul style={{paddingLeft:"21px"}}>
                    <li>Some text goes here</li>
                    <li>Some text goes here</li>
                    <li>Some text goes here</li>

                </ul>
    </div>
    <div className="rightwrap">
        <div className="content-wrap">
            <h2>Latest News</h2>  
            <h3 className="text-color" style={{fontSize: "14px",marginBottom: "5px"}}>SOME TEXT GOES HERE</h3> 
            <p style={{margin:"0px"}}>Some text goes here</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veritatis dicta corporis veniam numquam possimus beatae eligendi 
          </p>
          <a href="/#" style={{textDecoration: "underline",color:"#b2ba67"}}>Read More</a>
        </div>
   <div className="content-wrap">
    <h2>useful links</h2>  
    <ul className="linkclass" style={{paddingLeft: "21px"}} >
        <li><a href="/#">Link 1</a></li>
        <li><a href="/#">Link 2</a></li>
        <li><a href="/#">Link 3</a></li>
        <li><a href="/#">Link 4</a></li>
    </ul>
   </div>
   <div className="content-wrap">
    <h2>Search</h2>  
    <div className="input-wrap">
        <input type="search" placeholder="Enter Keywords"/>
        <FiSearch/>
    </div>
    
    </div>
    </div>
</div>

    </div>
  )
}

export default About