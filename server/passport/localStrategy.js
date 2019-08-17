const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy

var db = require("../database/models");

passport.use(new LocalStrategy(
  {
    usernameField: 'username' // not necessary, DEFAULT
  },
  function(username, password, done) {
    db.User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err)
      }
      if (!dbuser) {
        return done(null, false, { message: 'Incorrect username' })
      }
      if (!dbuser.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect password' })
      }
      return done(null, dbuser)
    })
  }
))

module.exports = strategy