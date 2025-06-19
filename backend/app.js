const express = require('express');
const cors = require('cors');
const app = express();

const hotelsRoutes = require("./routes/hotels");
const destinationRoutes = require("./routes/destination");
const hotelRoutes = require("./routes/hotel");

app.use(cors())
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Catalogue: /destination, /hotels, ");

})

app.use("/destination", destinationRoutes)
app.use("/hotels", hotelsRoutes)
app.use("/hotel", hotelRoutes)





module.exports = app;