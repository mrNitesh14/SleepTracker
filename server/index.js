require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const { connectDB } = require("./db/db");

app.use(express.json());

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

connectDB();


app.get("/", (req, res) => {
  res.send(JSON.stringify({ message: "Hello World" }));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));