import React from 'react'

const Spreadsimple = () => {
 
const array1 =[1,2,3];
const array2 =[4,5,6];
const array3 =[...array1,...array2];
console.log(array3);

const object1 = {a:1,b:2};
const object2 = {c:3,d:4};
const object3 = {...object1,...object2};
console.log(object3);

  return (
    <div>


    </div>
  )
}

export default Spreadsimple