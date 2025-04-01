const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/user", (req, res) => {
  // console.log(req.body);
  res.send("<h1>Username:" + req.body.username + "</h1>");
});

app.get("/", (req, res) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(3000);
