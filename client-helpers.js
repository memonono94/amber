var withAmberCliFilesDo = function(fn){
    return $.ajax({type: "GET", url: "http://localhost:3000/amber-cli-files", success: fn});
};