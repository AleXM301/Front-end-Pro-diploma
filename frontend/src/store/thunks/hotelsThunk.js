import {createAsyncThunk,} from "@reduxjs/toolkit";

const HOTEL_API_URL = "http://localhost:3000/hotels";
const HOTEL_DETAIL_URL = `http://localhost:3000/hotel`;

export const getHotels = createAsyncThunk(
    "hotels/getHotels",
    async (_, {rejectWithValue}) => {
        try {
            const res = await fetch(HOTEL_API_URL);

            return await res.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const getHotelsById = createAsyncThunk(
    "hotel/getHotelsById",
    async (id, {rejectWithValue}) => {
        try {
            console.log("getHotelsById: start");
            const res = await fetch(HOTEL_DETAIL_URL + `/` + id);
            return await res.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
