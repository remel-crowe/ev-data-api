const express = require("express");
const router = express.Router();
const Car = require("../models/car");

//Get All Cars
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
