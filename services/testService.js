var utillService=require('./utillService');
var db=require("../db");
exports.test = function (req) {
    console.log('sevice');
    var name='name';
    return req.param(name);
}
exports.testJson=function (req){
    console.log('testJson sevice');
    console.log(req.body);
    var json=req.body;
    console.log(json.name);
    return utillService.makeJson(true,'성공하였습니다');
}