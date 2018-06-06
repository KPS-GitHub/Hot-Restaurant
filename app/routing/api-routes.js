var tableData = require("../data/table-data.js");
var waitingListData = require("../data/waiting-list.js");

module.exports = function(app) {

    app.get("/api/tables", function(req, res) {
        res.json(tableData);
    });
    
};