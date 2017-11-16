// REQUIRED DEPENDENCIES
//////////////////////////////////////////////////////////////////////////////////////////
require('dotenv').config();
const cors = require('cors'),
    express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0')
// CONTROLLERS
//////////////////////////////////////////////////////////////////////////////////////////
const controller = require('./controllers/controller');
//////////////////////////////////////////////////////////////////////////////////////////
const app = express();
//////////////////////////////////////////////////////////////////////////////////////////
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('build'));
//////////////////////////////////////////////////////////////////////////////////////////


// DB CONNECTION
//////////////////////////////////////////////////////////////////////////////////////////
massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
    })
//////////////////////////////////////////////////////////////////////////////////////////


// AUTH0
//////////////////////////////////////////////////////////////////////////////////////////
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    db.get_user([profile.identities[0].user_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].id)
        } else {
            db.create_user([
                profile.emails[0].value,
                profile.identities[0].user_id
            ]).then(user => {
                return done(null, user[0].id)
            })
        }
    })
}))
passport.serializeUser(function (userId, done) {
    console.log('serialize', userId)
    done(null, userId);
})
passport.deserializeUser(function (userId, done) {
    console.log('deserialize', userId)
    app.get('db').current_user(userId).then(user => {
        done(null, user[0])
    })
})
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: `${process.env.FRONT_END_HOST}/#/dashboard`,
    failureRedirect: '/auth'
}))
app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, process.env.AUTH_LOGOUT)
})
app.get('/auth/user', passport.authenticate('auth0'), (req, res) => {
    req.app.get('db').current_user().then(user => {
        res.status(200).send(user)
    }).catch((err) => {
        console.log(err)
    })
})
//////////////////////////////////////////////////////////////////////////////////////////
// REST ENDPOINTS
//////////////////////////////////////////////////////////////////////////////////////////
// GET
// app.get('/api/profiles', contoller.getProfileData);
app.get('/api/journal', controller.getJournalData);
app.get('/api/goals', controller.getGoalsData);
app.get('/api/profiles', controller.getProfileData)

// POST
app.post('/api/profiles', controller.submitProfileData);

app.post('/api/journal', controller.submitJournalData);
app.post('/api/goals', controller.submitGoalData);
// PUT
app.put('/api/goals', controller.updateGoalsData);
// DELETE
app.delete('/api/journal/:id', controller.deleteJournalData);
app.delete('/api/goals/:id', controller.deleteGoalsData);
//////////////////////////////////////////////////////////////////////////////////////////

// PORT
//////////////////////////////////////////////////////////////////////////////////////////
app.listen(process.env.SERVER_PORT, () => console.log(`listening on port ${process.env.SERVER_PORT}`));