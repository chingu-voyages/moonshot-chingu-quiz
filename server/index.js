require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up on port ${PORT} `);
});
