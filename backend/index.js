const express = require('express');
const db = require('./db.json');
const app = express();
const port = 3000;
const cors= require('cors');
app.use(cors())
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Catalogue: /destination, /hotels, ");

})
app.get("/destination", (req, res) => {
    res.json(db.destination);

})
app.get("/hotels", (req, res) => {
    res.json(db.hotels);
})



app.get("/hotel/:id", (req, res) => {
    id = +req.params.id;
    const hotel = db.hotels.find((hotel) => hotel.id === id);
    res.json(hotel);

})



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})