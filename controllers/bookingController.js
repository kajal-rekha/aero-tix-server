const Booking = require("../models/BookingModel");

// create booking
const createBooking = async (req, res) => {
    const { flightId, seat_number, user } = req.body; 

    if (!user || !flightId || !seat_number) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const booking = new Booking({
            user, 
            flight: flightId,
            seat_number
        });

        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



// get bookings
const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user._id }).populate(
            "flight"
        );
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// cancel booking
const cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ error: "Booking not found" });
        }
        booking.status = "cancelled";
        await booking.save();
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createBooking,
    getBookings,
    cancelBooking
};
