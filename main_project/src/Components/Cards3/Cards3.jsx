import React from 'react'

import './Cards3.css'
function Cards3() {

const cardd=[
  
  {image:"https://quomodosoft.com/html/hooper/hooper/assets/img/icon/pen_tool.png",nmbr:"01",title:"Graphic Design",
  texts:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore."},
  {image:"https://quomodosoft.com/html/hooper/hooper/assets/img/icon/search.png",nmbr:"02",title:"Web Development",
  texts:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore."},
  {image:"https://quomodosoft.com/html/hooper/hooper/assets/img/icon/pen.png",nmbr:"03",title:"Interior Design",
  texts:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore."}
 

]

  return (
    <section className='services'>
    <div className='cards-wrap'>
        <div className='container'>
        <div className='row' >
        <div className='col-md-12'>
        <div className="area-title center " >
                        <h4 class="subtitle uppercase">
                        POPULAR FACULTY
                        </h4>
                        <h2>Popular Faculty Areas of Study</h2>
                        
                        <img src="https://quomodosoft.com/html/hooper/hooper/assets/img/bg-layers/area-line.png" alt=""/>
                    </div>
            </div>
{cardd.map((demo2)=>

<div className='col-md-4 ' >
<div className='text-icon-box single-service-box'>
  <div className='nmbr'>
<h1>{demo2.nmbr}</h1>

  </div>
<div className="box-img-icon service-box-icon mb50">
<img alt='img-service' src={demo2.image} />                    
        </div>
    <h4 className='box-title'>
      {demo2.title}</h4>
    <p>
    {demo2.texts}
    </p>
</div>
</div>
)}
    </div>
    </div>
    </div>
    </section>
  )
}

export default Cards3