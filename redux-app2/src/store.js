import { configureStore } from "@reduxjs/toolkit";
import  Creadslice  from "./Creadslice";



export const store = configureStore({
reducer: {
users: Creadslice
}


})