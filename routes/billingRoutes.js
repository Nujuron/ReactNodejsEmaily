const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'eur',
        source: req.body.id,
        description: '5€ for 5 credits',
      });
      req.user.credits += 5; // add 5 credits to the user model after the request is complete
      const user = await req.user.save(); // save the changes to the DB
      
      res.send(user);
    });
}