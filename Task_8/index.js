const express = require("express")
const path = require("path");
const app = express();
const formRouter = require("./routes/formRouter");
const con = require("./dbConnection/db");

app.use(express.urlencoded());


app.use("/css", express.static(path.join(__dirname, "node_modules", "bootstrap", "dist", "css")));
app.use("/js", express.static(path.join(__dirname, "node_modules", "bootstrap", "dist", "js")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(formRouter);




app.get("/", (req,res) => {
    res.render("home")
});




const PORT = 2100;
app.listen(PORT, () => {
    console.log(`Server is running port number is:${PORT}`);
    
});