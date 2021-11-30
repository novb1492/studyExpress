const admin = require('firebase-admin'); 
// firebase Admin 초기화 
var serviceAccount = require("C:/Users/Administrator/Desktop/study/studyExpress/google-services.json");
exports.firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

 
