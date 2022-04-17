const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//import route
const postRoute = require("./routes/posts");

dotenv.config();

//connect DB
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to Database")
);

//Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("home");
});

//Router Middlewares
app.use("/api", postRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running in port ${port}`));
