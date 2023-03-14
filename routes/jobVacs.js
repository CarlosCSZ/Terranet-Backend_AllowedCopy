const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/jobVacs");
const { validatorCreate, validatorGet, validatorUpdate, validatorDelete } = require('../validators/jobVacs');
const authMiddleware = require('../middlewares/handleSession');
const checkRol = require('../middlewares/handleRoles');


router.get("/", getItems);

router.get("/:id", validatorGet, getItem);

router.post("/", authMiddleware, checkRol(["admin"]), validatorCreate, createItem);

router.put("/:id", authMiddleware, checkRol(["admin"]), validatorUpdate, updateItem);

router.delete("/:id", authMiddleware, checkRol(["admin"]), validatorDelete, deleteItem);


module.exports = router