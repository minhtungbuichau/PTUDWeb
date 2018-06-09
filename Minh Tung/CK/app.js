var createError = require('http-errors');
var express = require('express');
var mysql = require('mysql');
var http = require('http').Server(app);
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var passport = require('passport');

//create connection mysql
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"123456789",
  database:'demo.sql'
});
//call to connect
connection.connect();
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!")
});
var app = express();

app.listen('3000',function(){
  console.log('Connected!');
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("stylesheets",express.static(__dirname + "/stylesheets"));
app.use("javascripts",express.static(__dirname + "/javascripts"));
app.use('/', indexRouter);
app.use('/users', usersRouter);

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret : "secret",
  saveUninitialized: true,
  resave: true
}))

//load dữ liệu từ trang json
app.locals.dataJSON = require('./model/data.json');



app.get('/',function(req,res){
  connection.query("SELECT * from qllaptop");
});

var bodyParser = require('body-parser');

module.exports = app;