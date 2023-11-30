module.exports = (app) => {
    const logData = require("../controllers/log.controller");
    app.post("/add-logdata", logData.addLogRecord);
    app.get("/get-logdata", logData.getLogData);
};
