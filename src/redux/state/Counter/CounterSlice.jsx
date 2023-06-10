import { createSlice } from "@reduxjs/toolkit";

export const counterSlce = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers:{
        increment:(state)=>{
            state.value = state.value + 1;
        },
        decrement:(state)=>{
            state.value = state.value - 1;
        }
    }
})


export const {increment, decrement} = counterSlce.actions;
export default counterSlce.reducer;

