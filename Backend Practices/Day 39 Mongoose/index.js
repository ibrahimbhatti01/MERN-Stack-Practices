const mongoose = require('mongoose');

main()
.then(() => console.log("connection successful"))
.catch((err) => console.log(err));

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/test');
};

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

const user2 = new User({
    name: "steve",
    email: "steve@gmail.com",
    age: 30
});

// User.find({})
//  .then(res => console.log(res))
//  .catch(err => console.log(err));

// User.findById('670658688971840f99a2b0f8')
//  .then(res => console.log(res))
//  .catch(err => console.log(err));

// User.findOne({name: "akash"})
//  .then(res => console.log(res))
//  .catch(err => console.log(err));

// User.find({age: {$gt: 40}})
//  .then(res => console.log(res))
//  .catch(err => console.log(err));

//  const user1 = new User({
//     name: "john",
//     email: "john@gmail.com",
//     age: 29
// });

// user1.save();

// user2
//  .save()
//  .then((res) => {
//     console.log(res);
//  })
//  .catch(err => console.log(err));

// User.insertMany([
//     {name: "tony", email: "tony@gmail.com", age: 20},
//     {name: "jose", email: "jose@gmail.com", age: 25},
//     {name: "akash", email: "akash@gmail.com", age: 47}
//  ])
//  .then((res) => console.log(res));


// User.findByIdAndUpdate({_id: '670658688971840f99a2b0f8'}, {age: 57}, {new: true})
//  .then(res => console.log(res))
//  .catch(err => console.log(err));