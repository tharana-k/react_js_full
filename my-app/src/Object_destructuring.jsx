import React from 'react'

function Object_destructuring() {
const person = {
    name:"mohan",
    age:"25",
    place:"kannur"
}
//normal display of objects
//const name1 = person.name
//const age1 = person.age
//console.log(name1);
//console.log(age1);
const {name,age,place} = person
console.log(name);
console.log(age);
console.log(place);
  return (
    <div>

    </div>
  )
}

export default Object_destructuring