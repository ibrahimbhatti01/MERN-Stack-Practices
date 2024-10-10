// Import the figlet module for creating ASCII art text
let figlet = require("figlet");

// Generate ASCII art for the heart symbol and log it to the console
figlet("&#10084;", function (err, data) {
  // Check for errors in the figlet function
  if (err) {
    console.log("Something went wrong..."); // Log error message
    console.dir(err); // Output the error details
    return; // Exit the function if an error occurs
  }

  console.log(data); // Log the generated ASCII art
});
