"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const fs = require("fs");
const app = express();

function generateUniqueID() {
  return crypto.randomBytes(8).toString("hex");
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

app.post("/register", (request, response) => {
  if (!request.body) return response.sendStatus(400);

  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      console.log(`Ошибка чтения файла с диска: ${err}`);
    } else {
      const databases = JSON.parse(data);

      databases.push({
        id: generateUniqueID(),
        email: request.body.email,
        password: request.body.password,
        nickname: request.body.nickname,
        results: [],
      });

      fs.writeFile(
        "./users.json",
        JSON.stringify(databases, null, 4),
        (err) => {
          if (err) {
            console.log(`Ошибка записи файла: ${err}`);
          }
        }
      );
    }
    return response.sendStatus(200);
  });
});

app.post("/login", (request, response) => {
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      console.log(`Ошибка чтения файла с диска: ${err}`);
    } else {
      const databases = JSON.parse(data);
      const user = {
        email: request.body.email,
        password: request.body.password,
      };
      const result = databases.find((u) => {
        if (u.email === user.email && u.password === user.password) return true;
        else return false;
      });
      if (result) return response.send(result.id);
      else return response.sendStatus(203);
    }
  });
});

app.post("/addResult", (request, response) => {
  fs.readFile("./users.json", "utf8", (err, data) => {
    console.log(request.body);
    if (err) {
      console.log(`Ошибка чтения файла с диска: ${err}`);
    } else {
      const databases = JSON.parse(data);
      const result = {
        score: request.body.score,
        timeLeft: request.body.timeLeft,
        userResponse: request.body.userResponse,
        date: request.body.date
      }
      databases
        .find((user) => user.id === request.body.token)
        .results.push(result);
      fs.writeFile(
        "./users.json",
        JSON.stringify(databases, null, 4),
        (err) => {
          if (err) {
            console.log(`Ошибка записи файла: ${err}`);
          }
        }
      );
    }
    return response.sendStatus(200);
  });
});

app.get("/user", (request, response) => {
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      console.log(`Ошибка чтения файла с диска: ${err}`);
    } else {
      const databases = JSON.parse(data);
      const userId = request.headers.authorization;
      const result = databases.find((u) => {
        if (u.id === userId) return true;
        else return false;
      });
      response.send(result);
    }
  });
});
