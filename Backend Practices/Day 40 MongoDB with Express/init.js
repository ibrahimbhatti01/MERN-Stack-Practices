const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "ahmad",
    to: "ali",
    message: "How r u bro? Bachy ksy hn ??",
    createdAt: new Date(),
  },
  {
    from: "Nosheen",
    to: "Sidra",
    message: "Mn zra bazar ja rhi thi, soch ap sy puch lu. ikathy chalty hn?",
    createdAt: new Date(),
  },
  {
    from: "Hakim",
    to: "Mehkoom",
    message: "Qaidi nmbr 804 ko reha krooo",
    createdAt: new Date(),
  },
  {
    from: "Ghulam",
    to: "Aqa",
    message: "Hazoor, yh hmara gala daba dy ga, bahir a ky",
    createdAt: new Date(),
  },
];

Chat.insertMany(allChats)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
