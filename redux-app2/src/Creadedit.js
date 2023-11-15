import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser} from './Creadslice';
import { Button, Form } from 'react-bootstrap';

export const Creadedit = () => {
    const dispatch = useDispatch();
    const navigate2 = useNavigate()
    const {user} = useParams()
    const userList = useSelector((state) => state.users.data);
const existingUser = userList[user];
const {id,name,username} = existingUser;
   const [userInfo, setUserInfo] = useState({
    id:id,
    names: name,
    uname: username,
   
  });

  const changeUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) =>{
    e.preventDefault();
    dispatch(
        updateUser({
          id:userInfo.id,
          name: userInfo.names,
          username:userInfo.uname
        }))
    navigate2("/")
 }


  return (
    <div>
<Form onSubmit={handlesubmit}>
<Form.Control type="text" placeholder="name"  name="names"  value={userInfo.names}  onChange={changeUserInfo} /><br></br>
<Form.Control type="text" placeholder="username..."  name="uname" value={userInfo.uname}  onChange={changeUserInfo} /><br></br>
<Button type='submit' style={{marginTop:"0px"}}>Update Data </Button>
              </Form>
    </div>
  )
}

