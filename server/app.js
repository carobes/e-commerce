const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const path = require('path');
const routes = require('./routes');
const db = require('./models/db');
const seed = require('./seed')
const Users = require('./models/users');

const app = express();

app.use(express.static(path.resolve(`${__dirname}/../browser/public`)));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())

passport.use(new LocalStrategy(
  function(username, password, done) {
    Users.findOne({where:{ mail: username }})
    .then(user => {
      if (!user) {
        return done(null, false, { errormsg: 'Email no registrado', emailCheck: false });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { errormsg: 'Contraseña incorrecta', passCheck: false });
      }
      return done(null, user);
    })
    .catch(err => done(err))
  }
));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Users.findById(id)
  .then(user => done(null,user))
  .catch(err => done(err))
  });

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/api', routes);

app.use('/', function (req, res, next) {
  const indexFilePath = path.resolve(`${__dirname}/../browser/index.html`)
  res.sendFile(indexFilePath)
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send(err);
});

db.sync({ force: true })
  .then(() => app.listen(3000, () => console.log('Listening on PORT 3000')))
  .then(() => seed())
