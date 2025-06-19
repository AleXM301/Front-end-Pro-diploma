const express = require("express");
const router = express.Router();

const db = require("../db.json");


router.get("/:id", (req, res) => {
 const id = +req.params.id;
    const hotel = db.hotels.find((hotel) => hotel.id === id);

    res.json(hotel);

})


module.exports = router;