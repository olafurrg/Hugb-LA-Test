const express = require("express");
const router = express.Router();
//const logic = require(../logic/index.htmæ);

router.get("/game", (req, res) => {
  res.status(200).send("Fuck the power rangers");
})

module.exports = router;
