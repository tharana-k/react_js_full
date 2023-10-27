import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbars from './Components/Navbars/Navbars'
import Carousel1 from './Components/Carousels/Carousel1'
import Cards3 from './Components/Cards3/Cards3'

const Router = () => {

    const Myrouter = createBrowserRouter([
{
path:"/",
element : <><Navbars/><Carousel1/><Cards3/></>
},

{
    path:"/carousel",
    element : <Carousel1/>
}
    ])


  return (
    <div>
    <RouterProvider router={Myrouter}/>
    
    </div>
  )
}

export default Router