import React, { useState } from 'react'
import Mapcard from './Mapcard'
import { Button } from 'react-bootstrap'
const Ternaryoperatorcards = () => {
    const [showtext, setshowtext] = useState(false)
  return (
    <div>

{showtext?<Mapcard/>:""}
<Button onClick={()=>setshowtext(!showtext)}>{showtext?"hide":"show"}</Button>

    </div>
  )
}

export default Ternaryoperatorcards