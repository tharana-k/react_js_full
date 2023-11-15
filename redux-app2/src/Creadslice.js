
import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "./data";

export const Creadslice = createSlice({
  name: "users",
  initialState: { data: UsersData },
  reducers: {
    addUser: (state, action) => {
      //uses push method to modify array's data
      state.data.push(action.payload);
    },

    deleteUser: (state, action) => {
      //uses filter to create a shallow array
      state.data = state.data.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
const {id,name,username} = action.payload;
const uu =state.data.find(user=>user.id === id);
if(uu){
    uu.name = name;
    uu.username = username;
}
    }
  }
});

export const { addUser, deleteUser, updateUser } = Creadslice.actions;
export default Creadslice.reducer;
