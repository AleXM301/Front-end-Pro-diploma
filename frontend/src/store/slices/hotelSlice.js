import {createSlice} from "@reduxjs/toolkit";
import {getHotelsById} from "@thunks/hotelsThunk.js";

const hotelSlice = createSlice({
    name: "hotel",
    initialState: {
        hotel: null,
        loading: true,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getHotelsById.pending, (state) => {
                state.loading = true;
                state.error = "";

            })
            .addCase(getHotelsById.fulfilled, (state, action) => {
                state.loading = false;
                state.hotel = action.payload;

                state.error = "";


            })
            .addCase(getHotelsById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;

            })
    },
})
export default hotelSlice.reducer;

