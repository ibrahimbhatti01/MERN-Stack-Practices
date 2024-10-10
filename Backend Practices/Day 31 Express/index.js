// Import the express module
const express = require("express");

// Create an instance of the express application
const app = express();

// Define the port for the server to listen on
let port = 8080;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, we are on root"); // Respond with a greeting message
});

// Define a route with dynamic parameters for username and id
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params; // Extract parameters from the request
  let htmlStr = `<h1>Welcome to the page of @${username}</h1>`; // Create a welcome message
  res.send(htmlStr); // Send the HTML string as a response
});

// Define a route for searching with a query parameter
app.get("/search", (req, res) => {
  let { q } = req.query; // Extract the query parameter 'q'

  // Check if the query parameter is provided
  if (!q) {
    res.send("Search something to get results."); // Prompt the user to enter a search term
  } else {
    res.send(`<h1>Displaying for "${q}"</h1>`); // Respond with the search term
  }
});

// Uncomment the following code blocks for additional routes and functionalities

/*
app.get("/search", (req, res) => {
    res.send("You're going to search");
});

app.get("/about", (req, res) => {
    res.send("<h1>Hi there<h1> <br> <h3>I'm Ibrahim, Your Aspiring Full Stack Developer<h3>");
});

app.get("*", (req, res) => {
    res.send("Wrong Path, You're going to get lost.");
});

app.post("/", (req, res) => {
    res.send("You've sent a POST request.");
});

app.use((req, res) => {
    // Log the received request
    console.log("Request received");
    
    // Send a sample JSON response
    res.send(apple = { 
        name: "apple",
        color: "red"
    });
});
*/
