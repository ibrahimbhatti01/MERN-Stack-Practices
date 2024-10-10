const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const { ifError } = require('assert');

app.use(methodOverride('_method'));
app.use(express.urlencoded( { extended: true } ));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Ibrahim8686@'
  });

let getFakeUser = () => {
    return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
    ];
};

    // let query = "INSERT INTO user (id, username, email, password) VALUES ?";
    // let data = [];

    // for (let i = 1; i <= 100; i++) {
    //     data.push(getFakeUser());    
    // };

app.get("/", (req, res) => {
    let query = `SELECT count(*) FROM user`;

    try {
        connection.query(query, (err, result) => {
            if(err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("some error");
    };
});

app.get("/user", (req, res) => {
    let query = `SELECT * FROM user`;

    try {
        connection.query(query, (err, users) => {
            if(err) throw err;
            res.render("users.ejs", {users});
        });
    } catch (err) {
        console.log(err);
        res.send("some error");
    };
});

app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let query = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(query, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
            console.log(user.password);
        });
    } catch (err) {
        console.log(err);
        res.send("Temporary error occured in DB");
    };
});

app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { username: newUsername, password: formPassword } = req.body;

    let query = `SELECT * FROM user WHERE id='${id}'`
    try{
        connection.query(query, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if(user.password != formPassword){
                res.send("WRONG Password");
            }else{
                let query2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(query2, (err, result) => {
                    if (err) throw err;
                    res.redirect('/user');
                });
            };
        });
    } catch(err){
        console.log(err);
        res.send("Temporary error occured in DB");
    };
});

app.get("/user/newuser", (req, res) => {
    res.render("newuser.ejs");
});

app.post("/user", (req, res) => {
    let {id, username, email, password} = req.body;
    let query = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;
    try{
        connection.query(query, (err, result) => {
            if(err) throw err;
            res.redirect("/user");
        });
    }catch(err){
        console.log(err);
        res.send("Temporary error");
    }
});

app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let query = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(query, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("delete.ejs", { user });
            console.log(`Password = ${user.password}`);
            console.log(`Username = ${user.username}`);
        });
    } catch (err) {
        console.log(err);
        res.send("Temporary error occured in DB");
    };
});

app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let {username: enterdUserName, passwrod: enteredPassword} = req.body;
    let query = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(query, (err, result) => {
            if(err) throw err;
            let user = result[0];
            if(enterdUserName !== user.username && enteredPassword !== user.password){
                res.send("WRONG Username or Password");
            }else{
                let query = `DELETE FROM user WHERE id='${id}'`;
                connection.query(query, (err, result) => {
                    if(err) throw err;
                    res.redirect('/user');
                });
            };
        });
    }catch(err){
        console.log(err);
        res.send("Temporary error");
    };
});

app.listen(8080, () => {
    console.log(`Server is listening at Port 8080`);
});