const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const router = require("./router/index.js");

const app = express();
const BASE_URL = process.env.BASE_URL;

app.use(morgan("combined"));
app.use(express.json());
app.use(cors({
    origin: `${BASE_URL}`,
}));

app.use(router);

module.exports = app;