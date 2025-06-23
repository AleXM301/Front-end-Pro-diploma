import {createSlice} from "@reduxjs/toolkit";
import {getHotels} from "@thunks/hotelsThunk.js";

const hotelsSlice = createSlice({
    name: "hotels",
    initialState: {
        hotels: [],
        loading: true,
        error: "",
        pagination: {
            page: 1,
            limit: null,
            currentPage: 1,
            totalPages: 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHotels.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getHotels.fulfilled, (state, action) => {
                state.hotels = action.payload.hotels;
                state.loading = false;
                state.error = "";
                state.pagination.page = action.payload.page;
                state.pagination.limit = action.payload.limit;
                state.pagination.currentPage = action.payload.currentPage;
                state.pagination.totalPages = action.payload.totalPages;
            })
            .addCase(getHotels.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
})
export default hotelsSlice.reducer;

