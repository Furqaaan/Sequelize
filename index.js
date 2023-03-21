const express = require("express");
const app = express();
const cors = require("cors");

app.use(
    cors({
        origin: "*",
    })
);

const db = require("./models");
const { Member } = require("./models");

db.sequelize
    .sync()
    .then((res) => {
        console.log("DB Synced ...");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

app.get("/create", (req, res) => {
    Member.create({
        role: "Admin",
        isAdmin: 1,
    })
        .then((res) => {
            console.log("Record Created ...");
        })
        .catch((err) => {
            console.log(err);
        });

    res.sendStatus(200);
});

app.get("/select", (req, res) => {
    Member.findAll({ where: { id: 2 } })
        .then((result) => {
            console.log("Records Found ...");
            return res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get("/delete", (req, res) => {
    Member.destroy({ where: { id: 1 } })
        .then((result) => {
            console.log("Records Deleted ...");
        })
        .catch((err) => {
            console.log(err);
        });

    res.sendStatus(200);
});
