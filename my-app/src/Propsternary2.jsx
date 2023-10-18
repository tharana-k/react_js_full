import React from 'react'


const Propsternary2 = ({age}) => {



  return (
    <div>
<h1>Age is {age}</h1>
{age>18?<h1>Person is an adult</h1>:<h1>Person is a teenager</h1>}
    </div>
  )
}

export default Propsternary2