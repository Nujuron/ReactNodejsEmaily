const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// DB connection
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in miliseconds
        keys: [keys.cookieKey] // encrypt cookie
    })
);
// passport use cookies
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // calls the module with app object

const PORT = process.env.PORT || 5000; // Dynamic Port Binding, production env.PORT, dev 5000
app.listen(PORT);