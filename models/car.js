const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },
  Model: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("car", carSchema);
