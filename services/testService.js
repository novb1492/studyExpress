var utillService=require('./utillService');
var db=require("../db");

exports.testSelect = function (req,res) {
    console.log('test sevice');
    try {
        db.findBy("testTable").then(result=>{
            console.log("유저 수 : ", result.size);
            var rows = [];
            result.forEach((doc) => {
                var data = doc.data();
                data.createDate = new Date(data.createDate);
                rows.push(data);
            });
            res.json(rows);
        });
    } catch (error) {
        res.json(utillService.makeJson(false,"정보조회실패"));
    }
 
}
exports.testInsert=function(req,res){
    console.log("testinsert service");
    var receiptData = req.body;
    console.log(receiptData);

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