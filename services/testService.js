var utillService=require('./utillService');
var db=require("../db");
var nextstart=null;
var beforeStart=null;
var start=null;
exports.testSelect = function (req,res) {
    console.log('test sevice');
    try {
        console.log(nextstart+"s");
        if(nextstart==null){
            nextstart = new Date().toString().replace("T"," ");
        }
        //console.log(nextstart);
        var action=req.param("action");
        console.log("페이징 액션"+action);
        db.findBy("testTable",nextstart).then(result=>{
            console.log("유저 수 : ", result.size);
            var rows = [];
            result.forEach((doc) => {
                var data = doc.data();
                rows.push(data);
            });
            nextstart=rows[rows.length-1].date;
            beforeStart=rows[0].date;
            console.log(nextstart+" 새로");
            res.render("board.ejs",{ rows: rows });
        });
    } catch (error) {
        console.log(error);
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