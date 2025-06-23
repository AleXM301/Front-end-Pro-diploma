const express = require('express');
const db = require("../db.json");
const router = express.Router();


router.get("/", (req, res) => {

    const queryParams = req.query;
    let hotels = db.hotels;

    const page = parseInt(queryParams.currentPage) || 1;
    const limit = parseInt(queryParams.limit) || 10;

    if (queryParams.destination) {
        hotels = hotels.filter(hotel => hotel.city === queryParams.destination);
    }
    if (queryParams.rating) {
        hotels = hotels.filter(hotel => hotel.hotel_rating === +queryParams.rating);
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedHotels = hotels.slice(startIndex, endIndex);

    paginatedHotels.sort((firstHotel, secondHotel) => firstHotel.price > secondHotel.price);
    res.json({
        currentPage: page,
        totalPages: Math.ceil(hotels.length / limit),
        hotels: paginatedHotels,
    });
})

module.exports=router;