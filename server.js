const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));
//Deploy db 

//est routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/viewRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
