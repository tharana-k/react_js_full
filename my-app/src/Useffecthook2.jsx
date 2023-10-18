import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const Useffecthook2 = () => {
const [first, setfirst] = useState("helooo");
const [value, setvalue] = useState("welcome");



useEffect(() => {
alert("hello welcome");
}, [first,value])


  return (
    <div>
<h1>{first}</h1>
<Button onClick={()=>setfirst("hai")}>change</Button>

<h1>{value}</h1>
<Button onClick={()=>setvalue("welcome user")}>change</Button>
    </div>
  )
}

export default Useffecthook2