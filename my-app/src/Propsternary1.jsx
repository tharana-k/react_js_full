import React, { useState } from 'react'
import Propsternary2 from './Propsternary2'

const Propsternary1 = () => {
const [age, setage] = useState(30)

  return (
    <div>

<Propsternary2  age={age}/>

        
    </div>
  )
}

export default Propsternary1