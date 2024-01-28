var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const port = 4000;
const url = "mongodb://localhost:27017/orchidAsm";

const connect = mongoose.connect(url);
connect.then((db) => {
  console.log("ok!!!!");
});

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const orchidsRouter = require("./routes/orchidsRouter");
const categoriesRouter = require("./routes/categoriesRouter");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/orchids", orchidsRouter);
app.use("/categories", categoriesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, ()=>{ console.log(`Project dang chay o port ${port}`)})

module.exports = app;
