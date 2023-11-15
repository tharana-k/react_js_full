
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersData } from "./data";
import axios from 'axios'

export const fetchArticles = createAsyncThunk("data/get", async () => {
    // Here you can use axios
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const json = await response.json();
    return json.results;
  });

export const Creadslice = createSlice({
  name: "users",
  /*initialState: { data: UsersData }*/
  initialState: {
    loading: false,
    data: []
  },
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchArticles.rejected, (state) => {
      state.loading = false;
    });
  }
});



export const { addUser, deleteUser, updateUser } = Creadslice.actions;
export default Creadslice.reducer;
