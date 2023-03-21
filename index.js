const express = require("express");
const app = express();
const cors = require("cors");

app.use(
    cors({
        origin: "*",
    })
);

const db = require("./models");

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

app.get("/", (req, res) => {
    res.sendStatus(200);
});
