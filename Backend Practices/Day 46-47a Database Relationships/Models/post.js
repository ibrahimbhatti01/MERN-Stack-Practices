const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");

main()
  .then(() => console.log("connection successful"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
};


// One to squillion || Approach 03 || Reference to the parent inside child || For -Instagram posts -Quora posts ...

// Parent
const userSchema = new Schema({
  username: String,
  email: String,
});

const User = model("User", userSchema);

// Child
const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Post = model("Post", postSchema);


// const addData = async () => {
//   let user1 = new User({
//     username: "ibrahim Bhatti",
//     email: "ib.8686299@gmail.com"
//   });

//   let post1 = new Post({
//     content: "Hello, to ksy hn ap ??",
//     likes: 0
//   });

//   post1.user = user1;
//   await user1.save();
//   let result = await post1.save();

//   console.log(result);
// }

// addData();


// const addData2 = async () => {
//   let post2 = new Post({
//     content: "Axhaw, Chlo Allah hafiz",
//     likes: 0
//   });

//   post2.user = await User.findOne({username: "ibrahim Bhatti"});
//   let result = await post2.save();
//   console.log(result);
// }

// addData2();


const getData = async () => {
  let posts = await Post.find({}).populate("user", "username");
  console.log(posts);
};

getData();
