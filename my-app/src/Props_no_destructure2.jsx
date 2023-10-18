import React from 'react'

const Props_no_destructure2 = (props) => {
const array1=props.arrobj1
const val1=props.val
  return (
    <div>
    {array1.map((demo)=>
 
<>
<h1>{demo.name}</h1>
  <h6>{demo.place}</h6>
</>

    )}    
<h4>{val1}</h4>


    </div>
  )
}

export default Props_no_destructure2