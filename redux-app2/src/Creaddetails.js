import { useSelector} from "react-redux";
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export  function Creaddetails() {

  const userList = useSelector((state) => state.users.data);
  console.log("userlist", userList);
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
        {userList.map((user,ind) => 
        

<tr key={user.id}>
<td>{user.name}</td>
<td>{user.username}</td>
<td>
<Link to={`/Creadview/${ind}`}>
    <Button>View</Button></Link>
 </td>
    <td><Link to={`/Creadedit/${ind}`}>
    <Button>Edit</Button></Link></td>
    <td><Link to={`/Creaddelete/${ind}`}>
    <Button>Delete</Button></Link></td>

</tr>

        
      
        )}
              </table>
          <br></br>   
 <div style={{textAlign:"left"}}><Link to="/Creadcreate">
    <Button>Create</Button></Link></div>
             
             
             </div>
      </div>
<br></br>
     
    </div>
  );
}