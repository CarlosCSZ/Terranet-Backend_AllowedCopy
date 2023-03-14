const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/changeOwner");
const { validatorCreate, validatorGet, validatorUpdate, validatorDelete } = require('../validators/changeOwner');
const authMiddleware = require('../middlewares/handleSession');
const checkRol = require('../middlewares/handleRoles');


router.get("/", authMiddleware, checkRol(["admin"]), getItems);

router.get("/:id", authMiddleware, checkRol(["admin"]), validatorGet, getItem);

router.post("/", validatorCreate, createItem);

router.put("/:id", authMiddleware, checkRol(["admin"]), validatorUpdate, updateItem);

router.delete("/:id", authMiddleware, checkRol(["admin"]), validatorDelete, deleteItem);


module.exports = router