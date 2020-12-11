const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Deploy db 

//est routes
app.use(require("./apiRoutes/api.js"));
app.use(require("./viewRoutes/view.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
