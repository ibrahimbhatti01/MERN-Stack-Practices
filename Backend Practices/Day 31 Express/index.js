const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})

app.get("/", (req, res) => {
    res.send("Hello, we are on root");
})

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}</h1>`;
    res.send(htmlStr);
})

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("Search something to get results.");
    }else{
        res.send(`<h1>Displaying for "${q}"</h1>`);
    }
})




// app.get("/search", (req, res) => {
//     res.send("You're going to search");
// })

// app.get("/about", (req, res) => {
//     res.send("<h1>Hi there<h1> <br> <h3>I'm ibrahim,Your Aspiring Full stack Developer<h3>")
// })

// app.get("*", (req, res) => {
//     res.send("Wrong Path, You're going to lost.")
// })

// app.post("/", (req, res) => {
//     res.send("you've send a post request.")
// })

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     res.send(apple = { 
//         name: "apple",
//         color: "red"
//     });
// })