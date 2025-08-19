const express = require("express");
const authRouter = express.Router();
const passport = require("passport");
const authController = require("../Controllers/authController");
const getUser = require("../Controllers/authController");

authRouter.get("/google", 
    passport.authenticate("google"), {scope: ["profile", "email"]});

authRouter.get("/google/callback", 
    passport.authenticate("google", {session: false}),
    authController.googlecallback
)

authRouter.get("/user", 
    passport.authenticate("jwt", {session: false}),
    authController.getUser
)


