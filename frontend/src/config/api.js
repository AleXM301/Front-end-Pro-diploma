import ENV from "@config/env.js";

export const API_URL = {
    BASE_URL: ENV.VITE_API_URL,
    HOTEL_API_URL: ENV.VITE_API_URL + "/hotels",
    HOTEL_DETAIL_URL: ENV.VITE_API_URL + `/hotel`,
    DESTINATIONS_API_URL: ENV.VITE_API_URL + "/destination"
};

