const express = require("express");
require("dotenv").config();
const mongoose = require("./config/connection");
const getRouter = require("./routes/getRouter");
// const postRouter = require("./routes/postRouter");
const postRequest = require("./Controllers/postController");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(getRouter);
app.post("/api/user/register", postRequest);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running port number:${PORT}`)
    
});