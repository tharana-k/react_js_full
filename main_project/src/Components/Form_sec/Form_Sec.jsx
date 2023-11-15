import React from 'react'
import Accordin_main from '../Accordin/Accordin_main'
import Loginform from '../Loginform/Loginform'
import './Form_sec.css'
const Form_Sec = () => {
  return (
    <section className='contact-sec'>
<div className='container-fluid'>
<div className='row'>
<div className='col-md-12 col-lg-5'>

<Loginform/>
</div>

<div className='col-md-12 col-lg-7'>
<Accordin_main/>
    
</div>
</div>
</div>
</section>
  )
}

export default Form_Sec