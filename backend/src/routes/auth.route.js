const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth.middlerware");
const authController = require("../controllers/auth.controller");

const authRoutes = express.Router();

authRoutes.post("/signin", authController.signIn);

authRoutes.post("/signup", authController.signUp);

authRoutes.delete("/signout", verifyAuth, authController.signOut);

module.exports = authRoutes;
