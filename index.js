const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// DB connection
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const app = express();

require('./routes/authRoutes')(app); // calls the module with app object

const PORT = process.env.PORT || 5000; // Dynamic Port Binding, production env.PORT, dev 5000
app.listen(PORT);