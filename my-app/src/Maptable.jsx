import React from 'react'

function Maptable() {
const person = [{name:"rayson",age:"40",place:"bnglre"},{name:"maya",age:"30",place:"ladakh"},{name:"harsh",age:"20",place:"goa"}]

  return (
    <div>
        <table>
            <tr>
            <th>name</th>
            <th>age</th>
            <th>place</th>
            </tr>
          
        {person.map((demo)=>
<>
<tr> 
    <td>{demo.name}</td> 
    <td>{demo.age}</td>
    <td>{demo.place}</td>
</tr>



</>

        )}
        </table>
    </div>
  )
}

export default Maptable