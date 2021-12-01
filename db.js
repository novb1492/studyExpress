const admin = require('firebase-admin'); 
// firebase Admin 초기화 
var serviceAccount = require("C:/Users/Administrator/Desktop/study/studyExpress/tttt-cf9d9-firebase-adminsdk-1ilbf-a9904fabad.json");
exports.firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

 
