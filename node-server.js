var express = require("express");
var fs = require("fs");
var cors = require('cors');
var app = express(), router = express.Router();

app.use(cors());

router.get('/amber-cli-files', function(req, res) {
    var files = fs.readdirSync("./external/amber-cli/src");
    files = files.filter(function(file) { return file.substr(-3) === '.js'; });
    files = files.map(function(file){ return "amber_cli/" + file.split(".")[0] });

    res.send(files);
});

app.use(router);

app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});
