//Создание сервера с помощью ExpressJS

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());
//app.use(express.json());

const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
    .connect(dbConfig.url, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Успешное подключение к базе данных");
    })
    .catch((error) => {
        console.log("Нет соединения с базой данных: ", error);
        process.exit();
    });

app.use(express.static(path.join(__dirname, "public")));
require("./app/routes/eventsWorld.routes")(app);
require("./app/routes/userData.routrs")(app);

const PORT = 4040;

app.listen(PORT, () => {
    console.log(`Application start on port: ${PORT}`);
});
