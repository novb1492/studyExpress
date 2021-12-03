var testService=require('./services/testService');

exports.testSelect = function (req, res) {
    console.log('testSelect controller');
    testService.testSelect(req,res);
}
exports.testInsert=function(req,res){
    console.log('testInsert controller');
    testService.testInsert(req,res);    
}
