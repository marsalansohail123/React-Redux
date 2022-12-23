import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer";

const store = configureStore({
    reducer: {
        loginReducer: loginReducer,
    }
})

export default store;