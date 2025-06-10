import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: [],
        token: null,
        loading: false,
        error: "",
    },
    reducers:{}
})

export default authSlice.reducer;