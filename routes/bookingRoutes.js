const express = require("express");
const {
    createBooking,
    getBookings,
    cancelBooking
} = require("../controllers/bookingController");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.post("/", isAuthenticated, createBooking);
router.get("/", isAuthenticated, getBookings);
router.patch("/:bookingId/cancel", isAuthenticated, cancelBooking);

module.exports = router;
