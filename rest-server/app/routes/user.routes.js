module.exports = (app) => {
    const userData = require("../controllers/user.controller");
    app.post("/user", userData.addUser);
    app.get("/login", userData.loginUser);
    app.get("/get-users", userData.getUsers);
};