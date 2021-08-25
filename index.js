const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express();
// https://console.cloud.google.com/
passport.use(new GoogleStrategy({ 
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken) => {
        console.log(accessToken);
    })
); // new instance of GoogleStrategy

app.get(
    '/auth/google',
    passport.authenticate('google', { // GoogleStrategy has some code which identify it as 'google'
        scope: ['profile', 'email'] // specifies to Google what we want from the user
    })
);

const PORT = process.env.PORT || 5000; // Dynamic Port Binding, production env.PORT, dev 5000
app.listen(PORT);