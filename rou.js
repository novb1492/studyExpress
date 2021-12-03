const router = require("express").Router();
const controller=require("./controller");
router.get("/", controller.testSelect);
router.post("/db/postReceiptSave",controller.testInsert);
module.exports = router;
