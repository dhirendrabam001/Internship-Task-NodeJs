const {newUrlShorter} = require("../models/userScheme");
const shortid = require("shortid");

const shortUrlData = async (req,res) => {
    try {
        const loginurl = req.body.loginurl;
        if(!loginurl) {
            return res.status(400).send("Original Url Not Found")
        }
        const shortCode = shortid.generate();
        const shortUrl = `http://localhost:2500/${shortCode}`;

        // Now save to database

        const finalShortUrl = new newUrlShorter({shortCode, loginurl});
        await finalShortUrl.save();
        
        res.render("shortUrl", {shortUrl});
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error")
    }

};

const getOriginalUrl = async (req,res) => {
    try {
        const {shortCodee} = req.params;
        const checkUrlData = await newUrlShorter.findOne({shortCode: shortCodee});
        if(!checkUrlData) return res.status(400).send("Url does not matched database");

        res.redirect(checkUrlData.loginurl);
        
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal Server Issue")
    }
};

module.exports = {
    shortUrlData,
    getOriginalUrl

}
