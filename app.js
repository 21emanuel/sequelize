const express = require("express");

const app = express();
const sequelize = require("./database/db");
const User = require("./model/user");
const port = 3000;

app.get("/", (req, res) => {
  User.create({
    name: "Cristian",
    birthday: new Date(1998, 5, 30),
  }).then((user) => {
    res.json(user);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Nos conectamos a la base de datos");
    })
    .catch((error) => {
      console.log("se produjo un error", error);
    });
});
