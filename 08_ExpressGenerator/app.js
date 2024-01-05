//Crea error 404
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

// view engine setup // configuracion de plantillas.
//direccion de plantillas
app.set("views", path.join(__dirname, "views"));
//motor de plantillas
app.set("view engine", "jade");
//use -> middlewares
//logger-> morgan
app.use(logger("dev"));
//formato json
app.use(express.json());
//codificar urls
app.use(express.urlencoded({ extended: false }));
//manejo de cookies.
app.use(cookieParser());
//contenido estatico que se va a visualizar en el front
app.use(express.static(path.join(__dirname, "public")));

//Routers
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler Siempre va al final de las rutas. ya que se ejecuta despues de las  rutas de arriba
//ante rutas no existentes
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

module.exports = app;
