import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './Creadslice';
import { useNavigate } from 'react-router-dom';

export const Creadcreate = () => {
    const navigate2 = useNavigate()
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.data);
    console.log("userlist", userList);
    const [userInfo, setUserInfo] = useState({
      name: "",
      userName: "",
      newUserName: ""
    });
  
    const changeUserInfo = (e) => {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };
  
  return (
    <div>
<div className="addUser" style={{textAlign:"left"}}>
        <input
          type="text"
          placeholder="Name..."
          name="name"
          onChange={changeUserInfo}
        />
        <input
          type="text"
          placeholder="Username..."
          name="userName"
          onChange={changeUserInfo}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: userInfo.name,
                username: userInfo.userName
              })
            );
navigate2("/")
            
          }}
        >
         
          Add User
        </button>
      </div>

    </div>
  )
}

