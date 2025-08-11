const dotenv = require("dotenv").config();
const express = require("express");
const path = require("path");
const registerRouter = require("./routes/registerRouter");
const bearer_token = require("bearer-token");
const dashboardRouter = require("./routes/dashboardRouter");
const loginRouter = require("./routes/loginRouter");
// const registerMiddleware = require("./middleware/registerMiddleware");


const con = require("./database/connection");
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/css", express.static(path.join(__dirname, "node_modules", "bootstrap", "dist", "css")));
app.use("/js", express.static(path.join(__dirname, "node_modules", "bootstrap", "dist", "js")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(registerRouter);
app.use(dashboardRouter);
app.use(loginRouter);


const PORT = 2300;
app.listen(PORT, () => {
    console.log(`Server Is Running Port Number Is:${PORT}`);
    
});