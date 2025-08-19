const JwtStrategy = require("passport-jwt").Strategy;
const passport = require("passport");
const userModel = require("../../models/user");

const cookieExtract = req=> req.cookies?.id;

module.exports = (passport) => {
    passport.use(new JwtStrategy ({
        jwtFromRequest: cookieExtract,
        secretOrKey: process.env.JWT_SECRET
    }, async (payload, done) => {
        try {
            const userInfo = await userModel.findById(payload.sub)
            if(userInfo) {
                done(null, userInfo)
            } else {
                done(null, false)
            }
        } catch (error) {
            done(error, false)
        }
    }))
}