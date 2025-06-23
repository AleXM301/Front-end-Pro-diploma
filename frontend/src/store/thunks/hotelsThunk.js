import {createAsyncThunk,} from "@reduxjs/toolkit";
import {API_URL} from "@/config/api.js";

export const getHotels = createAsyncThunk(
    "hotels/getHotels",
    async ({filters = {}, currentPage, limit = 10}, {rejectWithValue}) => {
        try {

            const pagination = new URLSearchParams({currentPage, limit}).toString();
            const params = new URLSearchParams(filters).toString();
            const res = await fetch(API_URL.HOTEL_API_URL + "?" + params + "&" + pagination);
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
            const res = await fetch(API_URL.HOTEL_DETAIL_URL + `/` + id);
            return await res.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
