const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const generateToken = (req,res) => {
    try {
        // generateToken
        const token = jwt.sign({sub: req.userModel,_id},
            process.env.JWT_SECRET,
            {expiresIn: "45m"}
        )
        res.cookie("token is", token, {
            httpOnly:true,
            sameSite: "lax"
        });
        res.redirect(`${process.env.UI_URL}/success-login?access-token${token}`)
    } catch (error) {
        console.error("Error during calllback", error);
        res.status(500).json({message: "Internal Server Issue"});
    }
}

module.exports = generateToken;

// getuser

const getUser = (req,res) => {
    try {
        if(!req.userModel) {
            res.status(400).json({message: "User not authentaction"});
        }
        res.json({
            userModel: req.userModel
        })
    } catch (error) {
        console.error("Error during calllback", error);
        res.status(500).json({message: "Internal Server Issue for getuser"});
    }
}


module.exports = getUser;