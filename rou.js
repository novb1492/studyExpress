const router = require("express").Router();
const controller=require("./controller");
router.get("/", controller.testParm);
router.get("/test",controller.testJson);
router.get("/db/postReceiptSave",controller.testInsert);
module.exports = router;
