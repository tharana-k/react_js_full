import React, { createContext } from 'react'
import { useState } from 'react'

const newcontext = createContext()  
const Context_provider = ({children}) => {
const [first1, setfirst1] = useState("hello")
const [name, setname] = useState({name:"jhon",age:35})  
const [car, setcar] = useState([{name:"bmw",color:"white"},{name:"maruthi",color:"white"},{name:"audi",color:"black"}])


  return (
    <div>
<newcontext.Provider value={{first1,name,car,setfirst1,setname,setcar}}>
{children}
</newcontext.Provider>
    </div>
  )
}

export default Context_provider
export{newcontext}