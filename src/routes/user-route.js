const express = require('express');
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/", UserController.get);
router.post("/create", UserController.create);
router.put("/update/:id", UserController.update);
router.delete("/delete/:id", UserController.delete);


module.exports = router;