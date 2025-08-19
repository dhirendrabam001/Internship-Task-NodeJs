const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const passport = require("passport");

const cookieParser = require("cookie-parser");
const mongoose = require("./database/connection");
const app = express();

app.use(cookieParser);
app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running port number:${PORT}`); 
});
