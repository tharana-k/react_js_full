import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Ternaryoperataor = () => {
const [showtext, setshowtext] = useState(false)

  return (
    <div>
<h1>Ternary operator example.....</h1>
{showtext?<h4>hello ternary operator</h4>:""}
<Button onClick={()=>setshowtext(!showtext)}>{showtext?"hide":"show"}</Button>
    </div>
  )
}

export default Ternaryoperataor