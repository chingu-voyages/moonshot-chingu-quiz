const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the server");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up on port ${PORT} `);
});
