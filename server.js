var express = require('express');
//var firebase=require('./db');
const routes = require("./rou"); // index.js 는 / 와 같으므로 생략 가능
var app = express();
 
// body-parser는 내장되어있음.  json 파싱하기 위해서 설정만 추가
app.use(express.json());
// express에는 json 데이터를 파싱하는 모듈이 내장되어있다.
// 하지만 json만 되고 x-www-form-urlencoded를 파싱하기 위해서 아래를 확장해야 한다.
app.use(express.urlencoded({
  extended: true
}))
app.use(routes) 
//app.use('/db', firebase);


 
app.listen(3000,function () {
  console.log('Example app listening on port 3000!');
});

