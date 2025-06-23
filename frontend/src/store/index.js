import {configureStore} from "@reduxjs/toolkit";
import hotelsReducer from "@slices/hotelsSlice.js";
import hotelReducer from "@slices/hotelSlice.js";
import destinationReducer from "@slices/destinationsSlice.js";
import hotelsFilterReducer from "@slices/hotelsFilterSlice.js";
import logger from "./middlewares/logger.js";

const store = configureStore(
    {
        reducer: {
            hotels: hotelsReducer,
            hotel: hotelReducer,
            destinations: destinationReducer,
            filter: hotelsFilterReducer,
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    }
)
export default store;
