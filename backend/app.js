var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const expressValidator = require('express-validator')

var indexRouter = require('./src/routes/index');
var authRouter = require('./src/routes/auth');
var dashboardRouter = require('./src/routes/dashboard');
var productRouter = require ('./src/routes/product');
var contactRouter = require('./src/routes/contact');
//var registrationRouter = require('./src/routes/registration');




//Connexion à la base de donnée
mongoose.connect("mongodb://localhost:27017/Mon_potager_urbain",
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true})
  .then(() => console.log('Connection okay'))
  .catch(() => console.log('Connection error'));


//On définit notre objet express nommé app
var app = express();
// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());

//Définition des CORS
app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//router
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/dashboard', dashboardRouter);
app.use('/product', productRouter);
app.use('/contact', contactRouter);
//app.use('/', registrationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
