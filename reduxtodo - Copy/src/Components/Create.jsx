import React from 'react'
import './Create.css'
import { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [place, setplace] = useState('');

    const users = useSelector((state)=> state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const Handlesubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id: users[users.length-1].id+1,name,age,place}))
        navigate('/')
    }
  return (
    <div>

        <div className='parent'>
            <h2 className='titlr'>Add New Profile</h2>
            <br />
        <form onSubmit={Handlesubmit}>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Name" name='name' onChange={e=>setname(e.target.value)}/>
    </div>
    <div class="col">
      <input type="number" class="form-control" placeholder="Age" name='age' onChange={e=>setage(e.target.value)}/>
    </div>
  </div>
  <br />
  <div class="row">
  <div class="col">
      <input type="text" class="form-control" placeholder="Place" name='place' onChange={e=>setplace(e.target.value)}/>
    </div>
  </div><br />
  <button className='btn btn-info'>Submit</button>
</form>

</div>
    </div>
  )
}

export default Create