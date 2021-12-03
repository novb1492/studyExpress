var utillService=require('./utillService');
var db=require("../db");
var start=null;
exports.testSelect = function (req,res) {
    console.log('test sevice');
    try {
        console.log(start+"s");
        if(start==null){
            start = new Date().toString().replace("T"," ");
        }
        console.log(start);
        db.findBy("testTable",start).then(result=>{
            console.log("유저 수 : ", result.size);
            var rows = [];
            result.forEach((doc) => {
                var data = doc.data();
                rows.push(data);
            });
            start=rows[rows.length-1].date;
            console.log(start+" 새로");
            res.render("board.ejs",{ rows: rows });
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