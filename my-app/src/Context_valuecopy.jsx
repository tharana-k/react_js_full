import React, { useContext } from 'react'
import { newcontext } from './Context_provider'
import { Button } from 'react-bootstrap'
import { Newcontext } from './App'
const Context_valuecopy = () => {
    const display = useContext(newcontext)
const {first1,name,car,setfirst1,setname,setcar} = display

const change = ()=>{
  setfirst1("Hello Arun")

}
const objectchange = ()=>{

  setname((prevobj)=>({...prevobj,name:"varun",age:26}))

}
const arraychange =()=>{
  const updateitem = [...car]
    updateitem[0].name = "thar"
    setcar( updateitem)
}

const display1 = useContext(Newcontext)
const {data} = display1
  return (
    <div>
{data.map((demo1)=>
<>
<h6>{demo1.qualification}</h6>
</>

)}
<h1>{first1}</h1>
<Button onClick={change}>change</Button>
<h1>{name.name}</h1>
<h1>{name.age}</h1>
<Button onClick={objectchange}>change object</Button>
{car.map((demo)=>
<>
<h6>{demo.name}</h6>
<h6>{demo.color}</h6>
</>
)}


<Button onClick={arraychange}>change array of object</Button>
    </div>
  )
}

export default Context_valuecopy