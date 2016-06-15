'use strict';

var os = require('os');
var ifaces = os.networkInterfaces();
var Object = {
    values: function(object){
        var values = [];
        for(var key in object) {
            values = values.concat(object[key]);
        }
        return values;
    }
};
var IPAddress = {
    addressForInterface: function(_interface){
        if(!ifaces[_interface]){ return null }
        return ifaces[_interface].filter(function(ip){ return ip.family === 'IPv4' })[0].address
    },
    currentExternalIP: function(){
        return IPAddress.addressForInterface('eth0') ||
                IPAddress.addressForInterface('wlan0') ||
                IPAddress.anyExternalIP() ||
               	'localhost';
    },
    anyExternalIP: function(){
        return Object.values(ifaces).filter(function(ip){ return (ip.family === 'IPv4') && !ip.internal })[0].address;      
    }
};

module.exports = IPAddress;