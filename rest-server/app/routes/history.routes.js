module.exports = (app) => {
    const historyData = require("../controllers/history.controller");
    app.post("/history-query", historyData.addHistory);
    app.get("/get-history", historyData.getHistory);
};

