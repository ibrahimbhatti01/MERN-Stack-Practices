// Import Mongoose for MongoDB interactions
const mongoose = require("mongoose");

// Connect to the MongoDB database and log success or error
main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

// Function to establish a connection to MongoDB
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// Define a schema for the User model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create the User model using the defined schema
const User = mongoose.model("User", userSchema);

// Create a new User instance
const user2 = new User({
  name: "steve",
  email: "steve@gmail.com",
  age: 30,
});

// Uncomment the following lines to perform various database operations

/*
// Retrieve all users from the database
User.find({})
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Find a user by their ID
User.findById('670658688971840f99a2b0f8')
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Find a user by name
User.findOne({ name: "akash" })
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Find users older than a certain age
User.find({ age: { $gt: 40 } })
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Create and save a new user instance
const user1 = new User({
    name: "john",
    email: "john@gmail.com",
    age: 29
});
user1.save();

// Save the second user instance and log the result
user2.save()
    .then((res) => {
        console.log(res);
    })
    .catch(err => console.log(err));

// Insert multiple users into the database
User.insertMany([
    { name: "tony", email: "tony@gmail.com", age: 20 },
    { name: "jose", email: "jose@gmail.com", age: 25 },
    { name: "akash", email: "akash@gmail.com", age: 47 }
])
    .then((res) => console.log(res));

// Update a user's age by their ID
User.findByIdAndUpdate(
    { _id: '670658688971840f99a2b0f8' },
    { age: 57 },
    { new: true }
)
    .then(res => console.log(res))
    .catch(err => console.log(err));
*/
