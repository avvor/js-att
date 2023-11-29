module.exports = (app) => {
    const userData = require("../controllers/user.controller");
    app.post("/new-user", userData.addUser);
    app.post("/login", userData.loginUser);
};
