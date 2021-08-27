const express = require('express');
require('./services/passport');


const app = express();

require('./routes/authRoutes')(app); // calls the module with app object

const PORT = process.env.PORT || 5000; // Dynamic Port Binding, production env.PORT, dev 5000
app.listen(PORT);