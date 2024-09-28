import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:10,
    reducers:{
        increaseBy1:(state)=>state+1,
        decreasedBy1:(state)=>state-1,
        increaseBy10:(state)=>state+10,
        decreasedBy10:(state)=>state-10
    }
})
export const {increaseBy1,decreasedBy1,increaseBy10,decreasedBy10}= counterSlice.actions;
export default counterSlice.reducer;