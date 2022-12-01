const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const lectureRoute = require("./routes/lecture");
const wordRoute = require("./routes/word");
const userRoute = require("./routes/user");

port = 8000
dotenv.config();

app.get("/test-api", (req, res) => {
    res.status(200).json("Hello");
})

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Mongodb connected")
})

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan("common"));

app.use("/v1/lecture", lectureRoute);
app.use("/v1/word", wordRoute);
app.use("/v1/user", userRoute);

// app.listen(port, () => {
//     console.log("Server dang chay");
// })