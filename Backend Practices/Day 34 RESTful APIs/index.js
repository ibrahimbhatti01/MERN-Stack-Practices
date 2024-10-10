const express = require("express");          // Importing express for routing and server management
const app = express();                       // Initializing express app
const path = require("path");                // Importing path module to handle and transform file paths
const { v4: uuidv4 } = require('uuid');      // Importing UUID for generating unique IDs for posts
const methodOverride = require('method-override'); // Importing method-override for HTTP verbs like PUT and DELETE in HTML forms

const port = 8080;                           // Setting the server port

// Starting the server and listening to the defined port
app.listen(port, () => {
    console.log("Listening to port: 8080");
});

app.use(express.urlencoded({ extended: true }));  // Middleware to parse incoming requests with URL-encoded payloads (e.g., form data)

app.set("view engine", "ejs");                    // Setting EJS as the template engine for rendering views
app.set("views", path.join(__dirname, "views"));  // Defining the directory for the view templates

app.use(express.static(path.join(__dirname, "public")));  // Serving static files (CSS, JS, images) from the "public" directory

// Redirecting root URL to "/posts" route
app.get("/", (req, res) => {
    res.redirect("/posts");
});

// Rendering the list of posts at "/posts"
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});              // Passing posts array to the view for rendering
});

// Sample data for posts (to be used in place of a database)
let posts = [
    {
        id: uuidv4(),                              // Unique identifier for each post
        username: "apnabusiness",
        content: "coding matlab apna-business :) Happy Coding!"
    },
    {
        id: uuidv4(),
        username: "nomanafzal",
        content: "hard work paves the road for success"
    },
    {
        id: uuidv4(),
        username: "ibrahimbhatti",
        content: "Got selected for my 1st internship today!"
    }
]

// Route to render form for creating a new post
app.get("/posts/new", (req, res) => {
    res.render("form.ejs");                        // Rendering form for new post
});

// Handling form submission for creating a new post
app.post("/posts", (req, res) => {
    let {username, content} = req.body;            // Extracting username and content from form data
    let id = uuidv4();                             // Generating a new unique ID for the post
    posts.push({id, username, content});           // Adding the new post to the posts array
    res.redirect("/posts");                        // Redirecting back to the posts list after submission
});

// Route to show a specific post using its ID
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;                         // Extracting the post ID from the URL parameters
    let post = posts.find((posts) => id === posts.id); // Finding the post by its ID
    res.render("show.ejs", {post});                // Rendering the post in the show view
});

// Route to render the edit form for a specific post
app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;                         // Extracting the post ID from the URL parameters
    let post = posts.find((posts) => id === posts.id); // Finding the post by its ID
    res.render("edit.ejs", {post});                // Rendering the edit form with the current post data
});

app.use(methodOverride('_method'));               // Enabling method override to use HTTP verbs like PATCH and DELETE via query string

// Handling the updating (PATCH) of a post's content
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;                         // Extracting the post ID from the URL parameters
    let newContent = req.body.content;             // Getting the updated content from the form
    let post = posts.find((posts) => id === posts.id); // Finding the post by its ID
    post.content = newContent;                     // Updating the content of the found post
    res.redirect("/posts");                        // Redirecting back to the posts list after update
});

// Handling the deletion of a specific post
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;                         // Extracting the post ID from the URL parameters
    posts = posts.filter((posts) => id !== posts.id); // Removing the post with the matching ID from the posts array
    res.redirect("/posts")                         // Redirecting back to the posts list after deletion
});