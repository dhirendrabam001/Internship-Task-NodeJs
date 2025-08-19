const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongooseDB Altas Database Connection Sucussfully");
}).catch((error) => {
    console.log("Some issue for mongoosedb connection", error);
    
});