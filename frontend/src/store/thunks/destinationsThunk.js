import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL} from "@config/api.js";

export const getDestinations = createAsyncThunk(
    "destinations/getDestinations",
    async (_, {rejectWithValue}) => {
        try {
            const res = await fetch(API_URL.DESTINATIONS_API_URL);
            console.log('DESTINATION RESPONSE');
            return await res.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
