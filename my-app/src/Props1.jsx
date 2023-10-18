import React from 'react'
import { useState } from 'react'
import Props2 from './Props2'


const Props1 = () => {
const [first, setfirst] = useState("hellooo")
const [obj1, setobj1] = useState({name:"varun",age:60})
const [arrobj1, setarrobj1] = useState([{name:"harsha",place:"bnglr"},{name:"dany",place:"cochin"},{name:"anu",place:"goa"}])
  return (
    <div>

<Props2 val={first} val2={obj1} val3={arrobj1}  setfirst={setfirst} setobj1={setobj1} setarrobj1={setarrobj1}/>


    </div>
  )
}

export default Props1