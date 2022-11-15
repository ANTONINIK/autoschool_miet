const fs = require("fs");
const crypto = require("crypto");

function generateUniqueID() {
  return crypto.randomBytes(8).toString("hex");
}

function readFile() {
  return fs.readFileSync(
    "./users.json",
    { encoding: "utf8" },
    (error, data) => {
      if (error) throw error;
      return data;
    }
  );
}

function writeFile(data) {
  fs.writeFileSync("./users.json", JSON.stringify(data, null, 4), (error) => {
    if (error) throw error;
  });
}

module.exports = {
  addUser: (user) => {
    const database = JSON.parse(readFile());
    database.push({
      id: generateUniqueID(),
      email: user.email,
      password: user.password,
      nickname: user.nickname,
      results: [],
    });
    writeFile(database);
  },

  addResult: (result) => {
    const database = JSON.parse(readFile());
    database.find((user) => user.id === result.token).results.push(result);
    writeFile(database);
  },

  getUser: (token) => {
    const database = JSON.parse(readFile());
    return database.find((item) => item.id === token);
  },

  getUserByEmailandPassword: (userData) => {
    const database = JSON.parse(readFile());
    const user = {
      email: userData.email,
      password: userData.password,
    };
    return database.find(
      (item) => item.email === user.email && item.password === user.password
    );
  },

  changeUser: (user) => {
    const database = JSON.parse(readFile());
    const index = database.findIndex((item) => item.id === user.id);
    database[index] = user;
    writeFile(database);
  },
};
