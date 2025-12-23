const express = require("express");
const router = express.Router();
const controller = require("../controller/logistikController");

router.get("/logistik", controller.getAll);
router.post("/logistik", controller.create);
router.put("/logistik/:id", controller.update);
router.delete("/logistik/:id", controller.remove);

module.exports = router;
