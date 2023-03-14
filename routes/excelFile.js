const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../middlewares/handleExcelFile");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/excelFile");
const { validatorGet, validatorDelete } = require('../validators/payment');
const authMiddleware = require('../middlewares/handleSession');
const checkRol = require('../middlewares/handleRoles');


router.get("/", getItems);

router.get("/:id", validatorGet, getItem);

router.post("/", authMiddleware, checkRol(["admin"]), uploadMiddleware.single('excel'), createItem);

router.put("/", authMiddleware, checkRol(["admin"]), uploadMiddleware.single('excel'), updateItem);

router.delete("/:id", authMiddleware, checkRol(["admin"]), validatorDelete, deleteItem);


module.exports = router