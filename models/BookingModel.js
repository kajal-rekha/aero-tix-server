const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookingSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        flight: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Flight",
            required: true
        },
        seat_number: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["booked", "cancelled"],
            default: "booked"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
