const mongoose = require("mongoose");
const { Schema } = require("mongoose");

main()
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
};

// One to few || Approach 01 || Nested Schema || For -Uber -Cream ...
const userSchema = new Schema({
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
        username: "ibrahim",
        addresses: [
            {
                location: "347-B, Pasha street, Orangzeb Market, Sahiwal",
                country: "Pakistan"
            }
        ]
    });

    user1.addresses.push({location: "569-K, Dumb street, Blind Market, Sahiwal", country: "Pakistan"})
    let result = await user1.save();
    console.log(result);
};

addUser();