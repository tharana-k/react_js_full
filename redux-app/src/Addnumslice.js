import { createSlice } from "@reduxjs/toolkit"

const initialState={num1:100,num2:50,sum:0}
export const Addnumslice=createSlice({
name:"add",
initialState,
reducers:{
addnums:(state)=>{
state.sum=state.num1+state.num2
},
subtractnums:(state)=>{
    state.sum=state.num1-state.num2
    },
    multiplynums:(state)=>{
        state.sum=state.num1*state.num2
},   
dividenums:(state)=>{
    state.sum=state.num1/state.num2
    }    
}
})


export const {addnums,subtractnums,multiplynums,dividenums}=Addnumslice.actions
export default Addnumslice.reducer