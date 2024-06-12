// import mongoose from "mongoose";
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const FlightSchema = new Schema(
    {
        flight_number: {
            type: String,
            required: true,
            unique: true
        },
        airline: {
            type: String,
            required: true
        },
        origin: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        },
        departure_time: {
            type: Date,
            required: true
        },
        arrival_time: {
            type: Date,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        seats: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Flight", FlightSchema);
