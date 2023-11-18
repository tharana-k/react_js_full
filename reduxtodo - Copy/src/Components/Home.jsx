import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';
import './Create.css'


function Home() {

    const users = useSelector((state)=> state.users);
    const dispatch = useDispatch();

    
    
    const handledelete = (id) => {
        dispatch(deleteUser({id:id}))
    }
  return (
    <div>
        <div className='container'>
            <h2>Profiles</h2>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Place</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>(
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.place}</td>
                            <td><Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                            <Link onClick={()=>handledelete(user.id)}  className='btn btn-sm btn-danger' >Delete</Link></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Home