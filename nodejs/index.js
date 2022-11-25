"use strict";
const express = require("express");
const cors = require("cors");
const model = require("./model");
const bodyParser = require("body-parser");
const PORT = 4000;
//const IP = "192.168.1.238"; //for mobile test
const IP = "localhost";  //default
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, IP, () => {
  console.log(`Server is running on port ${PORT} and ip ${IP}`);
});

app.post("/register", (request, response) => {
  model.addUser(request.body);
  response.sendStatus(200);
});

app.post("/login", (request, response) => {
  const user = model.getUserByEmailandPassword(request.body);
  if (user) response.send(user.id);
  else response.sendStatus(203);
});

app.post("/addResult", (request, response) => {
  model.addResult(request.body.result);
  response.sendStatus(200);
});

app.post("/changeUser", (request, response) => {
  model.changeUser(request.body.user);
  response.sendStatus(200);
});

app.get("/user", (request, response) => {
  const user = model.getUser(request.headers.authorization);
  if (user) response.send(user);
  else response.sendStatus(203);
});
