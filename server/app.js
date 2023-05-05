require("dotenv").config(); //invocation.

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const cors = require("cors");

const { movies } = require('./constant/movies');

const port = process.env.PORT || 4000;

const app = express();

// view engine setup
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
  res.send("server up and running!..");
})

app.get("/movies", (req, res) => {
  res.json(movies);
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
