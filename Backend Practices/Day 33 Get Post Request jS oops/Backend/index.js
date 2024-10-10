// Import the express module to use for creating the server
const express = require("express");

// Create an instance of an Express application
const app = express();

// Define the port number for the server to listen on
const port = 3000;

// Middleware to parse URL-encoded bodies (from forms) into req.body
// The `extended: true` option allows for rich objects and arrays to be encoded
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies into req.body
app.use(express.json());

// Route handler for GET requests to "/register"
// This route handles form submissions sent via the GET method
app.get("/register", (req, res) => {
    // Extract 'username' and 'password' from the query parameters of the URL
    let { username, password } = req.query;

    // Create a data object containing 'username' and 'password'
    let data = { username, password };

    // Log the data object to the console for debugging purposes
    console.log(data);

    // Send a response to the client, displaying a welcome message with the username
    res.send(`<h3>Standard GET Response, Welcome ${data.username}!</h3>`);
});

// Route handler for POST requests to "/register"
// This route handles form submissions sent via the POST method
app.post("/register", (req, res) => {
    // Extract 'username' and 'password' from the body of the POST request
    let { username, password } = req.body;

    // Create a data object containing 'username' and 'password'
    let data = { username, password };

    // Send a response to the client, displaying a welcome message with the username
    res.send(`<h3>Standard POST Response, Welcome ${data.username}!</h3>`);
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message to the console when the server starts successfully
    console.log(`App is listening at port ${port}`);
});