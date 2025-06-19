const express = require('express');
const db = require("../db.json");
const router = express.Router();


router.get("/", (req, res) => {

    const queryParams = req.query;
    let hotels = db.hotels;
    if (queryParams.destination) {
        hotels = hotels.filter(e => e.city === queryParams.destination);
    }
    if (queryParams.rating) {
        hotels = hotels.filter(e => e.hotel_rating === +queryParams.rating);
    }

    res.json(hotels);
})

module.exports=router;