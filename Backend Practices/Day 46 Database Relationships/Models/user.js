const mongoose = require("mongoose");
const {Schema} = require("mongoose");

main()
.then(() => console.log("Connection Successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
};

const userSchema = new Schema ({
  username: String,
  addresses: [
    {
      _id: false,
    location: String,
    country: String
    }
  ]
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
  let user1 = new User({
    username: "sherlokholmes",
    addresses: [
      {
        location: "348-A, Street No.02, Sahiwal",
        country: "Pakistan"
      }
    ]
  })

  user1.addresses.push(
    {
    location: "233-C, Street No.07, Sahiwal",
    country: "Pakistan"
    }
  );

  let result = await user1.save();
  console.log(result);
};

addUser();