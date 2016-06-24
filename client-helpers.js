var withAmberCliFilesDo = function(fn){
    $.get('../.env', function(host) {
        return $.ajax({type: "GET", url: "http://" + host + ":3000/amber-cli-files", success: fn});
    });
};