const express = require("express");
const path = require("path");
const con = require("./dbConnection/connection");
const registerRouter = require("./routes/registerRouter");
const loginRouter = require("./routes/loginRouter");
const checkMiddleware = require("./middleware/userPasswordMiddleware");
const app = express();

// Importd views all file
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

// importd css public file
app.use(express.static(path.join(__dirname, "public")));

// Boostrap 5 set
app.use("/css", express.static(path.join(__dirname, "node_modules", "bootstrap", "dist", "css")));
app.use("/js", express.static(path.join(__dirname, "node_modules", "bootstrap", "dist", "js")));

// req body data
app.use(express.urlencoded());

app.use(registerRouter);
app.use(loginRouter);









const PORT = 2200;
app.listen(PORT, () => {
    console.log(`Server Is Running Port Number Is:${PORT}`);
    
});