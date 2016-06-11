var IPAddress = require('./ip-address');
var AMBER_DEFAULT_COMMAND = "amber serve";

var AmberServe = {
    command: function(runExternally){
        return runExternally == 'external' ? AmberServe.runAmberOnExternalIPAddress() : AmberServe.runAmberLocally();
    },
    runAmberOnExternalIPAddress: function(){
        return AMBER_DEFAULT_COMMAND + " --port 4000 --host " + IPAddress.currentExternalIP();
    },
    runAmberLocally: function(){
        return AMBER_DEFAULT_COMMAND;
    }
};

module.exports = AmberServe;