var testService=require('./services/testService');

exports.testParm = function (req, res) {
    console.log('testParm controller');
    testService.test(req,res);
}
exports.testJson = function (req, res) {
    console.log('testJson controller');
    res.end( testService.testJson(req));
    
}
exports.testInsert=function(req,res){
    console.log('testInsert controller');
    testService.testInsert(req,res);    
}
