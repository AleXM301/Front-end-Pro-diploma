import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js";
import hotelsSplice from "./slices/hotelsSlice.js";
import hotelSlice from "./slices/hotelSlice.js";
import logger from "./middlewares/logger.js";

const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            hotels: hotelsSplice,
            hotel: hotelSlice,
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    }
)
export default store;
