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

router.get("/brand/:brand", async (req, res) => {
  const brand = req.params.brand;
  try {
    const cars = await Car.find({ Brand: brand });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// e.g. GET /brand/Audi

router.get("/search", async (req, res) => {
  const { brand, model } = req.query;
  let query = {};
  if (brand) query.Brand = brand;
  if (model) query.Model = model;
  try {
    const cars = await Car.find(query);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// e.g. GET /search?brand=Audi&model=A3

module.exports = router;
