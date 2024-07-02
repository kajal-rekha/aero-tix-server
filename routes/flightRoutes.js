const express = require("express");
const {
    createFlight,
    getAllFlights,
    getFlight,
    updateFlight,
    deleteFlight
} = require("../controllers/flightController");
const { isAdmin } = require("../middlewares/admin");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.post("/", isAuthenticated, isAdmin, createFlight);
router.get("/",  getAllFlights);
router.get("/:userId",  getFlight);
router.put("/:userId", isAuthenticated, isAdmin, updateFlight);
router.delete("/:userId", isAuthenticated, isAdmin, deleteFlight);

module.exports = router;
