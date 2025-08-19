const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
})
.then(() => {
    console.log("Mongoose DB Connection Successfully");
})
.catch((error) => {
    console.log("Connection Error");
    
});