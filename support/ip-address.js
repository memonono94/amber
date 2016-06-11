'use strict';

var os = require('os');
var ifaces = os.networkInterfaces();

var IPAddress = {
    addressForInterface: function(_interface){
        if(!ifaces[_interface]){ return null }
        return ifaces[_interface].filter(function(ip){ return ip.family === 'IPv4' })[0].address
    },
    currentExternalIP: function(){
        return IPAddress.addressForInterface('eth0') ||
               IPAddress.addressForInterface('wlan0') ||
               'localhost';
    }
};

module.exports = IPAddress;