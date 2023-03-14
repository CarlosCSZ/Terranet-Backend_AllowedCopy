const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../middlewares/handleCvFile");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/cvFile");
const authMiddleware = require('../middlewares/handleSession');
const checkRol = require('../middlewares/handleRoles');


router.get("/", authMiddleware, checkRol(["admin"]), getItems);

router.get("/:id", authMiddleware, checkRol(["admin"]), getItem);

router.post("/", uploadMiddleware.single('cvFile'), createItem);

router.put("/:id", authMiddleware, checkRol(["admin"]), updateItem);

router.delete("/:id", authMiddleware, checkRol(["admin"]), deleteItem);


module.exports = router