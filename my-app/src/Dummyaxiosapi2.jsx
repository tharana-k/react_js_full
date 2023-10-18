import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dummyaxiosapi2 = () => {
const [first, setfirst] = useState([])

useEffect(() => {

axios.get("https://dummyjson.com/products").then((display)=>{
    console.log(display);
setfirst(display.data.products)
})
}, [])



  return (
    <div>
{first.map((demo)=>
<>
<h1>{demo.brand}</h1>
<p>{demo.category}</p>
</>


)}


    </div>
  )
}

export default Dummyaxiosapi2