const admin = require('firebase-admin'); 
// firebase Admin 초기화 
var serviceAccount = require("./tttt-cf9d9-firebase-adminsdk-1ilbf-a9904fabad.json");
const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

exports.findBy=function(collectionName,start){
   
    return firebaseAdmin.firestore().collection(collectionName).orderBy("date","desc").startAfter(start).limit(5).get(); 
}
exports.insert=function(collection,id,json){
    return firebaseAdmin.firestore().collection(collection).doc(id).set(json);
}
 
