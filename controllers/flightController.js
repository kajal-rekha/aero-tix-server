const Flight = require("../models/FlightModel");

// create flight
const createFlight = async (req, res) => {
    try {
        const {
            flight_number,
            airline,
            origin,
            destination,
            departure_time,
            arrival_time,
            price,
            seats
        } = req.body;

        const flight = await Flight.create({
            flight_number,
            airline,
            origin,
            destination,
            departure_time,
            arrival_time,
            price,
            seats
        });
        res.status(200).json(flight);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get all flights
const getAllFlights = async (req, res) => {
    try {
        const flights = await Flight.find({});
        res.status(200).json(flights);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get a flight
const getFlight = async (req, res) => {
    try {
        const { userId } = req.params;

        const flight = await Flight.findById(userId);
        if (!flight) {
            return res.status(404).json({ error: "Flight not found" });
        }

        res.status(200).json(flight);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// update a flight
const updateFlight = async (req, res) => {
    try {
        const { userId } = req.params;
        const flight = await Flight.findByIdAndUpdate(userId, req.body, {
            new: true,
            runValidators: true
        });
        if (!flight) {
            return res.status(404).json({ error: "Flight not found" });
        }
        res.status(200).json(flight);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete flight
const deleteFlight = async (req, res) => {
    try {
        const { userId } = req.params;

        const flight = await Flight.findByIdAndDelete(userId);
        if (!flight) {
            return res.status(404).json({ error: "Flight not found" });
        }

        res.status(200).json({ message: "Flight deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateFlight,
    deleteFlight
};
