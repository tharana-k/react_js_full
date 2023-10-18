import React from 'react'

function Object1() {
const object1 = {
name:"obj1",
color:"red",
description:"dfgfgdgg"
}

  return (
    <div>
<h1>{object1.name}</h1>
<p>{object1.color} </p>
<p>{object1.description} </p>
    </div>
  )
}

export default Object1