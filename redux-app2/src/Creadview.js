import {useSelector} from "react-redux";
import { useParams } from "react-router-dom";
export  function Creadview() {

  const userList = useSelector((state) => state.users.data);
  const {user} = useParams()
  const viewdata = userList[user]
  return (
    <div className="App">
      <div className="displayUsers">
      <div >
              <table >
<tr>
<th>Name</th>
<th>usernme</th>

</tr>
    
        

<tr >
<td>{viewdata.name}</td>
<td>{viewdata.username}</td>


</tr>

              </table>
             
        
             
             
             </div>
      </div>
<br></br>
     
    </div>
  );
}