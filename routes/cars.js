const express = require("express");
const router = express.Router();

//Get All Cars
router.get("/", (req, res) => {
  res.send("Hello World");
});
//Get One

module.exports = router;
