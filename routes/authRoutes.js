const passport = require('passport');
module.exports = (app) => {
    // route handlers, express
    app.get(
        '/auth/google',
        passport.authenticate('google', { // GoogleStrategy has some code which identify it as 'google'
            scope: ['profile', 'email'] // specifies to Google what we want from the user
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google') // we have the user code, GoogleStrategy handles it differently now
    )

    app.get('/api/logout', (req, res) => {
        req.logout(); // takes the cookie and kills it
        res.send(req.user); // feedback
    });

    app.get('/api/current_user', (req,res) => {
        res.send(req.user);
    });
};