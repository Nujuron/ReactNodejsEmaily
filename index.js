const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

// DB connection
mongoose.connect(keys.mongoURI);

const app = express();

app.use(express.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in miliseconds
        keys: [keys.cookieKey] // encrypt cookie
    })
);
// passport use cookies
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // calls authRoutes with app object
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') { 
    // Express will serve up prodcution assets like our main.js file 
    app.use(express.static('client/build'));

    // Express will serve up the index.html if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000; // Dynamic Port Binding, production env.PORT, dev 5000
app.listen(PORT);