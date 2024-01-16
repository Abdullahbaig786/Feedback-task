// src/server.js
const express = require("express");
const bodyParser = require("body-parser");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
const port = 3001; // You can change the port as needed

app.use(bodyParser.json());

app.use("/feedback", feedbackRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
