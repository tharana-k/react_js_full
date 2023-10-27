import React from 'react'
import { useParams } from 'react-router-dom';

const Useparams = () => {
    const {username} = useParams();
  return (
    <div>
<h1>userprofile</h1>
<h2>username:{username}</h2>

    </div>
  )
}

export default Useparams