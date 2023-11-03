import { configureStore } from "@reduxjs/toolkit";
import  PrintNumSlice  from "./PrintNumslice";
import Addnumslice from "./Addnumslice";
import UsersSlice from "./UsersSlice";


export const store = configureStore({
reducer: {
print:PrintNumSlice,
add:Addnumslice,
users: UsersSlice
}


})