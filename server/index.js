require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up on port ${PORT} `);
});
