const mongoose = require("mongoose");
const initialData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then((res) => console.log("Connection Successful"))
  .catch((err) => console.log(err));

const initialDataBase = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initialData.data);
};

initialDataBase();
