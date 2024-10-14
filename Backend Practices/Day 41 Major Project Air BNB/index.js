const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const MONGO_URL = "mongodb://127.0.0.1:27017/test";
async function main() {
    await mongoose.connect(MONGO_URL);
};

main()
.then((res) => console.log("Connection Successful"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("I'm your root, Baby !!");
});

app.listen("8080", () => {
    console.log("Server is listening at port 8080");
});