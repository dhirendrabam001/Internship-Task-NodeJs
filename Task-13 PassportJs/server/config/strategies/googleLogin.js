const userModel = require("../../models/user");
const User = require("../../models/user");
const googleStrategy = require("passport-google-oauth20");

module.exports = (passport) => {
    passport.use(new googleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:2500/auth/google/callback"
    }, async (accessToken, refreshToken, profile, done) => {
        console.log("profile is", profile);
        
        try {
            const newUser = await userModel.findOneAndUpdate({
              googleId:profile?.id
            }, 
            
            {
                name:profile.displayName,
                email:profile.email[0].value,
                picture: profile.photos[0].value
            },
            {upsert: true, new: true}
        );
        done(null, newUser)
        } catch (error) {
            done(error, null)
        }
    }));
}