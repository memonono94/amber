var IPAddress = require("./support/ip-address");
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

var PORT = 3000;
var HOST = IPAddress.currentExternalIP();

if(fs.existsSync(".env", fs.F_OK)) {
    fs.unlinkSync(".env");
}
fs.writeFile(".env", HOST);

app.listen(PORT, HOST, function() {
    console.log("Node server running on http://" + HOST + ":" + PORT);
});
