// Import necessary modules
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

// Middleware for method override and parsing URL-encoded bodies
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// Set up EJS as the view engine and define views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// MySQL connection configuration
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Ibrahim8686@",
});

// Function to generate fake user data
let getFakeUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Home route: Get user count from the database
app.get("/", (req, res) => {
  let query = `SELECT count(*) FROM user`;
  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error");
  }
});

// Route to get all users
app.get("/user", (req, res) => {
  let query = `SELECT * FROM user`;
  try {
    connection.query(query, (err, users) => {
      if (err) throw err;
      res.render("users.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error");
  }
});

// Route to edit a user by ID
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let query = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
      console.log(user.password);
    });
  } catch (err) {
    console.log(err);
    res.send("Temporary error occurred in DB");
  }
});

// Update user data based on ID
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { username: newUsername, password: formPassword } = req.body;
  let query = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let user = result[0];

      // Check if password matches before updating username
      if (user.password !== formPassword) {
        res.send("WRONG Password");
      } else {
        let query2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(query2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Temporary error occurred in DB");
  }
});

// Render form to create a new user
app.get("/user/newuser", (req, res) => {
  res.render("newuser.ejs");
});

// Add a new user to the database
app.post("/user", (req, res) => {
  let { id, username, email, password } = req.body;
  let query = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;

  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (err) {
    console.log(err);
    res.send("Temporary error");
  }
});

// Route to confirm user deletion by ID
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let query = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
      console.log(`Password = ${user.password}`);
      console.log(`Username = ${user.username}`);
    });
  } catch (err) {
    console.log(err);
    res.send("Temporary error occurred in DB");
  }
});

// Delete user from the database
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { username: enteredUserName, password: enteredPassword } = req.body;
  let query = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let user = result[0];

      // Verify username and password before deletion
      if (
        enteredUserName !== user.username ||
        enteredPassword !== user.password
      ) {
        res.send("WRONG Username or Password");
      } else {
        let deleteQuery = `DELETE FROM user WHERE id='${id}'`;
        connection.query(deleteQuery, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Temporary error");
  }
});

// Start the server
app.listen(8080, () => {
  console.log(`Server is listening at Port 8080`);
});
