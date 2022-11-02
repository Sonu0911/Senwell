const express = require('express');
const mongoose = require("mongoose")
const router = express.Router();
const UserModel = require("../model/models.js")
const UserController = require("../Controller/userController")

router.post("/register", UserController.createUser)
router.post("/login", UserController.loginUser)
router.get("/user/:userId", UserController.getUser)

module.exports = router;