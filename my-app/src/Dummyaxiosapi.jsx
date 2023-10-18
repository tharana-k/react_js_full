import axios from 'axios'
import React from 'react'

const Dummyaxiosapi = () => {

axios.get("https://dummyjson.com/products").then((display)=>{

console.log(display);

})

  return (
    <div>
        


    </div>
  )
}

export default Dummyaxiosapi