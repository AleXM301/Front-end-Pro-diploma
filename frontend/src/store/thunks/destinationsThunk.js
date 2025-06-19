import {createAsyncThunk} from "@reduxjs/toolkit";

const DESTINATIONS_API_URL = "http://localhost:3000/destination";


export const getDestinations = createAsyncThunk(
    "destinations/getDestinations",
    async (_, {rejectWithValue}) => {
        try {
            const res = await fetch(DESTINATIONS_API_URL);
            console.log('DESTINATION RESPONSE');
            return await res.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
