const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const users = [
  { id: 1, name: "ali", email: "ddd@gmail.com", pass: 1212 },
  { id: 12, name: "hassan", email: "fff@gmail.com", pass: 1313 },
];

const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());

// //Sign in ...
// app.get("/signin", (req, res) => {
//   email = req.body.email;
//   pass = req.body.pass;
// });

//Check Login ...
app.post("/", (req, res) => {
  if (!req.body.email || !req.body.pass) {
    res.send("You Have Problem to Register");
    return;
  }
  const user = users.find((u) => {
    return u.email == req.body.email && u.pass == req.body.pass;
  });
  if (!user) {
    res.send("User Not Found !");
  }
  const token = jwt.sign(
    {
      sub: user.id,
      username: user.email,
    },
    "mysupersecretkey",
    { expiresIn: "3 hours" }
  );
  res.status(200).send({ access_token: token });
});

//Check Another pages ...
app.get("*", (req, res) => {
  res.send("NOT FOUND !!!");
});

app.listen(PORT, (err) => {
  if (err) throw err;
  if (!err) {
    console.log(`Serve Run On Port ${PORT}`);
  }
});
