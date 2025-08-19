const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const mongoose = require("./database/connection");


const app = express();



const PORT = process.env.PORT;

// export all
const shortUrlRouter = require("./routes/shortUrlRouter");
const urlRouter = require("./routes/urlRouter");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// require ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// require public folder
app.use(express.static(path.join(__dirname, "public")));

// require bootstap 5
app.use("/css", express.static(path.join(__dirname, "node_modules", "bootstrap", "dist", "css")));
app.use("/js", express.static(path.join(__dirname, "node_modules", "bootstrap", "dist", "css")));

app.use(shortUrlRouter);
app.use(urlRouter);




app.listen(PORT, () => {
    console.log(`Server Is Running Port Number:${PORT}`)
    
});




