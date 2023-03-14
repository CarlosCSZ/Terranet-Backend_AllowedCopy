const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/promotionCode");
const { validatorCreate, validatorUpdate, validatorGet, validatorDelete } = require('../validators/promotionCode');
const authMiddleware = require('../middlewares/handleSession');
const checkRol = require('../middlewares/handleRoles');


router.get("/", getItems);

router.get("/:id", validatorGet, getItem);

router.post("/", validatorCreate, createItem);

router.put("/:id", authMiddleware, checkRol(["admin"]), validatorUpdate, updateItem);

router.delete("/:id", authMiddleware, checkRol(["admin"]), validatorDelete, deleteItem);


module.exports = router