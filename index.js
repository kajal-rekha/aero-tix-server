require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const flighRoutes = require("./routes/flightRoutes")
const bookingRoutes = require("./routes/bookingRoutes");


const app = express();

const port = process.env.PORT || 5000;

app.use(cors({ credentials: true }));
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the aero-tix server" });
});

app.use("/api/users", userRoutes);
app.use("/api/flights", flighRoutes)
app.use("/api/bookings", bookingRoutes)

mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`connected to mongodb and listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.log(err.message);
    });
