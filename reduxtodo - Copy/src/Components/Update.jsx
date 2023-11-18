import React, { useState } from 'react'
import './Create.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './UserReducer';


function Update() {

    const {id} = useParams();

    const users = useSelector((state)=>state.users);
    const eUser = users.filter(f=>f.id==id);
    const {name,age,place} = eUser[0];
    const [uname, setname] = useState(name);
    const [uage, setage] = useState(age);
    const [uplace, setplace] = useState(place);

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const handleupdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id:id,
            name:uname,
            age:uage,
            place:uplace
        }))

        navigate('/')
    }

  return (
    <div>


    <div className='parent'>


    <h2 className='titlr'>Update Profile</h2>
            <br />

    <form onSubmit={handleupdate}>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Name" name='name' value={uname} onChange={e=> setname(e.target.value)}/>
    </div>
    <div class="col">
      <input type="number" class="form-control" placeholder="Age" name='age' value={uage} onChange={e=> setage(e.target.value)}/>
    </div>
  </div>
  <br />
  <div class="row">
  <div class="col">
      <input type="text" class="form-control" placeholder="Place" name='place' value={uplace}  onChange={e=> setplace(e.target.value)}/>
    </div>
  </div><br />
  <button className='btn btn-info'>Update</button>
</form>


</div>
    </div>
  )
}

export default Update