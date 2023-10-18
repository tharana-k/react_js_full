import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

const Dummyaxiosapi_card2 = () => {
    const [first, setfirst] = useState([])

    useEffect(() => {
    
    axios.get("https://jsonplaceholder.typicode.com/todos").then((display)=>{
        console.log(display);
    setfirst(display.data)
    })
    }, [])
      return (
        <div>
    <div className='container'>
            <div className='row' >
            {first.map((demo2)=>
    <>
                <div className='col-md-3 ' >
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{demo2.title}</Card.Title>
            <Card.Title>{demo2.userId}</Card.Title> 
          </Card.Body>
        </Card>
        </div>
        </>
    
    )}
        </div>
        </div>
    
    
        </div>
      )
    }
export default Dummyaxiosapi_card2