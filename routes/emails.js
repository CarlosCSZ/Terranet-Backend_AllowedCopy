const express = require ('express');
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/emails');
const { validatorCreate, validatorGet, validatorUpdate, validatorDelete } = require('../validators/emails');
const authMiddleware = require('../middlewares/handleSession');
const checkRol = require('../middlewares/handleRoles');


router.get("/", authMiddleware, checkRol(["admin"]), getItems);

router.get("/:id", authMiddleware, checkRol(["admin"]), validatorGet, getItem);

router.post("/", authMiddleware, checkRol(["admin"]), validatorCreate, createItem);

router.put("/:id", authMiddleware, checkRol(["admin"]), validatorUpdate, updateItem);

router.delete("/:id", authMiddleware, checkRol(["admin"]), validatorDelete, deleteItem);


module.exports = router 