require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const cors = require("cors");
// const bodyParser = require("body-parser");

// const timings = require("./routes/timings");
// const users = require("./routes/users");
// const auth = require("./routes/auth");
const PORT = process.env.PORT || 3000;
const { connectDB } = require("./db/db");
// app.use(bodyParser.json());
app.use(express.json());

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

connectDB();

// app.use("/api/v1/timings/", timings);
// app.use("/api/v1/users/", users);
// app.use("/api/v1/auth/", auth);

app.get("/", (req, res) => {
  res.send(JSON.stringify({ message: "Hello World" }));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));