const express = require("express");
const router = express.Router();

router.get("/ping", async (req, res, next) => {
  try {
    res.status(200).json({
      message: "Server is up",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;
