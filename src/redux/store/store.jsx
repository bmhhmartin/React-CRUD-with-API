import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/Counter/CounterSlice";

export default configureStore ({
    reducer:{
        counter: counterReducer
    }
})