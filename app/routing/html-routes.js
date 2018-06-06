var path = require('path');

module.exports = function(app) {
    
    app.get('/reserve', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/reserve.html'));
    });

    app.get('/tables', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/tables.html'));
    });

    // if user goes to any route other than /reserve or /tables, it will send them the home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

}