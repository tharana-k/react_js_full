import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./UsersSlice";

export  function Creadoperations() {
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
    <div className="App">
      <div className="displayUsers">
      <div >
              <table >
<tr>
<th>Name</th>
<th>usernme</th>
<th>updatefield</th>
<th>Action1</th>
<th>Action2</th>
</tr>
        {userList.map((user) => 
        

<tr key={user.id}>
<td>{user.name}</td>
<td>{user.username}</td>
<td>     <input
                type="text"
                placeholder="New username..."
                name="newUserName"
                onChange={changeUserInfo}
              /></td>
<td> <button
                onClick={() => {
                  dispatch(
                    updateUsername({
                      id: user.id,
                      username: userInfo.newUserName
                    })
                  );
                }}
              >
                Update Username
              </button></td>
<td> <button
                onClick={() =>
                  dispatch(
                    deleteUser({
                      id: user.id
                    })
                  )
                }
              >
                Delete User
              </button></td>
</tr>

        
      
        )}
              </table>
             
         
             
             
             </div>
      </div>
<br></br>
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
          }}
        >
         
          Add User
        </button>
      </div>
    </div>
  );
}