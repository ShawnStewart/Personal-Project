const express = require("express");
const mongoose = require("mongoose");

// import routes

const app = express();
app.use(express.json());

const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("=== Connected to MongoDB ===\n"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`\nServer is running on port ${port}`));
