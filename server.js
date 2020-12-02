require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());
const userRouter = require("./api/users/user.router");

app.get("/", (req, res) => res.json({ success: 1, message: "Hello Asad" }));

app.use("/api/users", userRouter);

const port = 4000 || process.env.PORT;

app.listen(port, () => console.log(`Port is running on this ${port}`));
