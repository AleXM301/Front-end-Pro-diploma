import {createSlice} from "@reduxjs/toolkit";
import {getDestinations} from "../thunks/destinationsThunk.js";

const destinationsSlice = createSlice({
    name: "destinations",
    initialState: {
        destinations: [],
        loading: true,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDestinations.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getDestinations.fulfilled, (state, action) => {
                state.destinations = action.payload;
                state.loading = false;
                state.error = "";

            })
            .addCase(getDestinations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;

            })
    },
})

export default destinationsSlice.reducer;