var utillService=require('./utillService');
var db=require("../db");

exports.test = function (req,res) {
    console.log('test sevice');
    try {
        db.findBy("testTable","18").then(result=>{
            res.json(result.data());
        },(error)=>{
            throw error;
        });
    } catch (error) {
        res.json(utillService.makeJson(false,"정보조회실패"));
    }
 
}
exports.testJson=function (req){
    console.log('testJson sevice');
    console.log(req.body);
    var json=req.body;
    console.log(json.name);
    return utillService.makeJson(true,'성공하였습니다');
}
exports.testInsert=function(req,res){
    console.log("testinsert service");
    var receiptData = req.body;
    console.log(receiptData.transaction_id);

    try {
        db.insert("testTable",receiptData.transaction_id,receiptData).then(()=>{
            return res.send(true);
        },(error)=>{
            throw error;
        })
    } catch (error) {
        console.log(error);
        return res.send(false);
    }
}