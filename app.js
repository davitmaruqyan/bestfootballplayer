var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
const ejsMate = require('ejs-mate');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
const session = require('express-session');
var bodyParser = require('body-parser');
const passport = require('passport');

const index = require('./routes/index');
const users = require('./routes/users');
const register = require('./routes/register');
const login = require('./routes/login');
const help = require('./routes/help');
const news = require('./routes/news');
const about = require('./routes/about');
const edite = require('./routes/edite');
//passports
const facebook = require('./routes/passports/facebook')(passport);
const twitter = require('./routes/passports/twitter')(passport);
const google = require('./routes/passports/google')(passport);

var app = express();

// view engine setup
app.set("views", `${__dirname}/views`);
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'word',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/register', register);
app.use('/login', login);
app.use('/help', help);
app.use('/news', news);
app.use('/about', about);
app.use('/edite', edite);
app.use('/facebook', facebook);
app.use('/', twitter);
app.use('/', google)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
