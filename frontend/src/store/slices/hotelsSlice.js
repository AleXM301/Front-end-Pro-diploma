import {createSlice} from "@reduxjs/toolkit";
import {getHotels} from "../thunks/hotelsThunk.js";

const hotelsSlice = createSlice({
    name: "hotels",
    initialState: {
        hotels: [],
        loading: true,
        error: "",
    },
    reducers: {
        replaceHotels: (state, action) => {
            return action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHotels.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getHotels.fulfilled, (state, action) => {
                state.hotels = action.payload;
                state.loading = false;
                state.error = "";
            })
            .addCase(getHotels.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
})

export const {replaceHotels} = hotelsSlice.actions;
export default hotelsSlice.reducer;

