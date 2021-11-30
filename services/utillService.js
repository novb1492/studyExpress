exports.makeJson = function (flag,message) {
    var response=JSON.stringify({
        "flag":flag,
        "message":message
    })
    return response;
}