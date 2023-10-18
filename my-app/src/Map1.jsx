import React from 'react'

function Map1() {
    const array = [{name:"maya",place:"kannur"},{name:"arun",place:"calicut"},{name:"arjun",place:"thrissur"}]
  return (
    <div>
        {array.map((demo)=>
        <>
        <h1>{demo.name}</h1>
<p>{demo.place}</p>
        </>







        )}



    </div>
  )
}

export default Map1