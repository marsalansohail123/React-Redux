import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        email: "arsalan@gmail.com",
        userName: "Arsalan sohail",
        password: "123456arsu"
    },
    reducers: {
        edit(state, action) {
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
})

export const { edit } = loginSlice.actions;

export default loginSlice.reducer;