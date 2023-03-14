const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../middlewares/handleCapacity");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/capacity");
const authMiddleware = require('../middlewares/handleSession');
const checkRol = require('../middlewares/handleRoles');


router.get("/", getItems);

router.get("/:id", getItem);

router.post("/", authMiddleware, checkRol(["admin"]), uploadMiddleware.single('capacity'), createItem);

router.put("/:id", authMiddleware, checkRol(["admin"]), updateItem);

router.delete("/:id", authMiddleware, checkRol(["admin"]), deleteItem);


module.exports = router