import React from 'react'
import { Button } from 'react-bootstrap'

const Props2 = ({val,val2,val3,setfirst,setobj1,setarrobj1}) => {
    const objupdate =() =>{
        setobj1((prevobj)=>({...prevobj,age:26}))
console.log(val2);
    }
    const changearray = () =>{
        const updatearray =[...val3];   
        updatearray[0].name = "update array";
        setarrobj1(updatearray)
    }

const handleclick = ()=>{
    const updatedarray = val3.map((obj)=>{
if(obj.name ==='harsha'){
return {...obj,name:'harshika'}
}
return obj;
    })
    setarrobj1(updatedarray)
}

    return (
      <div>
         <h3>string display</h3>
        <h4>{val}</h4>
        <Button onClick={()=>setfirst("hai...")}>update</Button>
        
        <h3>object display</h3>
        <h4>{val2.name}</h4>
        <h4>{val2.age}</h4>
        <Button onClick={objupdate}>update object</Button>

        <h3>array of objects display</h3>
        {val3.map((demo)=>
  <>

<h4>{demo.name} - {demo.place}</h4>

</>
        )}
        <Button onClick={changearray}>update array</Button>
        <Button onClick={handleclick}>update array2</Button>
        
        
        </div>
    )
  }

export default Props2