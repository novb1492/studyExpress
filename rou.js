const router = require("express").Router();
const controller=require("./controller");
router.get('/', (req, res) => {
    console.log(req.param("action"));
    res.send('Hello World!')
  })
router.get("/main",controller.testSelect);
router.post("/db/postReceiptSave",controller.testInsert);
module.exports = router;
