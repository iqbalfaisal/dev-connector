const express = require("express");
const connectDB = require("./config/db");

//connect to db
connectDB();

const app = express();

app.get("/", (req, res) => res.send("Api Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
