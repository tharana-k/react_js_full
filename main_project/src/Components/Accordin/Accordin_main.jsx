import React from 'react'
import Accordin from './Accordin'

const Accordin_main = () => {
  return (
    <div className='accordins'>
<div class="contents">
  <h6>QUICK ANSWERS</h6>
  <h2>Frequently Asked Questions</h2>
  </div>
<Accordin title="What programs does Bridge offer?" content="Bridge offers a wide range of programs, including undergraduate and postgraduate degrees, as well as certificate and diploma courses in various disciplines."  isOpenByDefault={true}/>
      <Accordin title="Are scholarships available for students?" content="Yes, Bridge offers scholarships and financial aid opportunities for eligible students based on academic merit and financial need." />
      <Accordin title="How can I apply to Bridge?" content="Applying to Bridge is easy! You can fill out our online application form and submit the required documents through our website." />
      <Accordin title="What is the student-to-faculty ratio?" content="At Bridge, we believe in personalized education, and our student-to-faculty ratio ensures that each student receives individual attention and support." />
      <Accordin title=" Does Bridge offer online courses?" content="Yes, Bridge provides online learning options, allowing students to access quality education from anywhere in the world.  " />
      <Accordin title=" Are there opportunities for extracurricular activities?" content="Absolutely! Bridge encourages students to participate in various extracurricular activities, clubs, and organizations to enhance their overall learning experience." />


    </div>
  )
}

export default Accordin_main