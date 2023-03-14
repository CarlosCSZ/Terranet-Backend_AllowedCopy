const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/payment");
const { validatorCreate, validatorUpdate, validatorDelete } = require('../validators/payment');
const authMiddleware = require('../middlewares/handleSession');
const checkRol = require('../middlewares/handleRoles');


router.get("/", authMiddleware, checkRol(["admin"]), getItems);

router.get("/:id", getItem);

router.post("/", validatorCreate, createItem);

router.patch("/:id", validatorUpdate, updateItem);

router.delete("/:id", authMiddleware, checkRol(["admin"]), validatorDelete, deleteItem);


module.exports = router