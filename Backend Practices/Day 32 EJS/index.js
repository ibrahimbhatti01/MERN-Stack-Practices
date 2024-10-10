// Import necessary modules
const express = require("express");
const path = require("path");

// Initialize Express application
let app = express();

// Define the port on which the server will listen
let port = 3000;

// Start the server and log the port it's listening on
app.listen(port, () => {
    console.log(`App is listening at port: ${port}`);
});

// Set EJS as the view engine for rendering templates
app.set("view engine", "ejs");

// Define the directory where the view templates are located
app.set("views", path.join(__dirname, "/views"));

// Route for the home page
app.get("/", (req, res) => {
    res.render("home.ejs"); // Render the "home" template
})

// Route for Instagram user profile pages
app.get("/ig/:username", (req, res) => {
    let { username } = req.params; // Extract the username from the URL parameters
    const instaData = require("./data.json"); // Load data from a JSON file
    let data = instaData[username]; // Get user-specific data from the JSON
    if(data){
        res.render("instagram.ejs", { data }); // Render the "instagram" template with user data
    }else{
        res.render("error.ejs");
    }
})

// Route for a simple "hello" response
app.get("/hello", (req, res) => {
    res.send("hello"); // Send plain text response
})

// Route for simulating a dice roll
app.get("/dice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1; // Generate a random dice value between 1 and 6
    res.render("dice.ejs", { diceVal }); // Render the "dice" template with the dice value
})
