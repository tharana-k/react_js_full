import React, { useState } from 'react'

const Usestateobjects = () => {
const [first, setfirst] = useState([{name:"maya",place:"kannur"},{name:"vidya",place:"goa"}])
const [name1, setname1] = useState({name:"varun",place:"wayanad"})

  return (
    <div>
<h1>My name is {name1.name} </h1>
<p>My place is {name1.place}</p>

{first.map((demo)=>
    <>
<h1>My name is {demo.name} </h1>
<p>My place is {demo.place}</p>

</>
)}



    </div>
  )
}

export default Usestateobjects