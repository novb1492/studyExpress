const router = require("express").Router();
const controller=require("./controller");
router.get("/", controller.testParm);
router.get("/test",controller.testJson);

module.exports = router;
