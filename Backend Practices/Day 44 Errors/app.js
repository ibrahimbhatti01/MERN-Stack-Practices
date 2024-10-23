const express = require("express");
const app = express();
const ExpressError = require("./expressError.js");

const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "Access Denied!");
}

app.get("/api", checkToken, (req, res) => {
    res.send("data");
})

app.get("/", (req, res) => {
    res.send("Hi, No-Doubt, I'm root.");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is forbidden!");
})

app.use((err, req, res, next) => {
    let {status, message} = err;
    res.status(status).send(message);
});

// // 404
// app.use((req, res) => {
//     res.send("Page not found");
// })

app.listen(8080, () => {
    console.log("Server is listening at 8080");
});
