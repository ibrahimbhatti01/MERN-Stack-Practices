const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     console.log("Han, mn hi pehla middleware hun.");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Han, Ji Ustad mn 2sra middleware hun.");
//     next();
// })

// // Logger {utility middleware} ---(npm Morgan do same work)
// app.use((req, res, next) => {
//   req.responseTime = new Date(Date.now()).toString();
//   console.log(req.method, req.path, req.responseTime, req.hostname);
//   next();
// });


// // 01 Authentication
// app.use("/api", (req, res, next) => {
//   let { token } = req.query;
//   if (token === "giveaccess") {
//     next();
//   }
//   res.send("Access Denied!");
// });

// app.use("/api", (req, res) => {
//   res.send("data");
// });

// OR

// 02 Authentication with multiple middleWares
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new Error("Access Denied!");
};

app.use("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.status(404).send("Hi, Mn abhi zinda hu, mn root hu");
});

// 404 {For customized error page}
app.use((req, res) => {
  res.send("Page not found");
});

app.listen("8080", () => {
  console.log("app is listening at 8080");
});
