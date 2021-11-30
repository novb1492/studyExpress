var testService=require('./services/testService');

exports.testParm = function (req, res) {
    console.log('testParm controller');
    var r=testService.test(req);
    console.log('받아옴');
    console.log(r);
    res.end("Hello World");
}
exports.testJson = function (req, res) {
    console.log('testJson controller');
    res.end( testService.testJson(req));
    
}
