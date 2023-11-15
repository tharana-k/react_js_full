import { useDispatch, useSelector} from "react-redux";
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchArticles } from "./Creadslice";
import { useEffect } from "react";
export  function Creaddetails() {

  //const userList = useSelector((state) => state.users.data);
  //console.log("userlist", userList);
  const articles = useSelector((state) => state.users.data);
  const loading = useSelector((state) => state.users.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

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
        {articles.map((user,ind) => 
        

<tr key={user.id}>
<td>{user.gender}</td>
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