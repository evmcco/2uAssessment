const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const invoiceRouter = require("./routes/invoice");

const cors = require("cors");

const corsOptions = {
  origin: "*",
  methods: "GET, PATCH, PUT, POST",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors(corsOptions));

app.use("/", indexRouter);
app.use("/invoice", invoiceRouter);

module.exports = app;
