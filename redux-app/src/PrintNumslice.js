import { createSlice } from "@reduxjs/toolkit"

const initialState={num:1}
export const PrintNumSlice=createSlice({
name:"print",
initialState,
reducers:{
printnums:(state)=>{
state.num *= 2
}

}
})


export const {printnums}=PrintNumSlice.actions
export default PrintNumSlice.reducer