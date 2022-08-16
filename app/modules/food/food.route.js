const express = require('express');
const router = express.Router()

const { checkAuth } = require("../../middleware/auth")

const controller = require("./food.controller")
const validation = require("./food.validation")

// create
router.post(
  "/",
  checkAuth,
  validation.createFood,
  controller.createFood
)

// read

// update

// delete

module.exports = router