var testService=require('./services/testService');

exports.testParm = function (req, res) {
    console.log('testParm controller');
    testService.test(req,res);
}
exports.testJson = function (req, res) {
    console.log('testJson controller');
    res.end( testService.testJson(req));
    
}
