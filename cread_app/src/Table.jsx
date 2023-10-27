import React from 'react'
import { useContext } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Newcontext } from './App'
import { Link } from 'react-router-dom'
const Tables = () => {
    const[data,setData] = useContext(Newcontext)
console.log(data);
  return (
    <div>
  <Table striped bordered hover variant="dark">
      <thead>
        <tr>
    
          <th>Name</th>
          <th>Age</th>
          <th>Qualification</th>
          <th>Action1</th>
          <th>Action2</th>
          <th>Action3</th>
        </tr>
      </thead>
      <tbody>
        {data.map((demo,ind)=>
<tr>
  {console.log(ind)}
<td>{demo.name}</td>
<td>{demo.age}</td>
<td>{demo.qualification}</td>
<td>
    <Link to={`/viewpage/${ind}`}>
    <Button>View</Button></Link></td>
    <td>
    <Link to={`/editpage2/${ind}`}>
    <Button>Edit</Button></Link></td>

    <td><Link to={`/deletepage/${ind}`}>
    <Button>Delete</Button></Link></td>

</tr>
        )}
      
      </tbody>
    </Table>

    <Link to="/createpage">
    <Button>Create</Button></Link>
    </div>
  )
}

export default Tables