import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    destination: '',
    rating: '',
};

const hotelsFilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;
        },
        resetFilters: () => initialState,
    },
});

export const { setFilter, resetFilters } = hotelsFilterSlice.actions;
export default hotelsFilterSlice.reducer;