const express = require ('express');
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/phoneNumber');
const { validatorCreate, validatorGet, validatorDelete } = require('../validators/phoneNumber');
const authMiddleware = require('../middlewares/handleSession');
const checkRol = require('../middlewares/handleRoles');


router.get("/", authMiddleware, checkRol(["admin"]), getItems);

router.get("/:id", authMiddleware, checkRol(["admin"]), validatorGet, getItem);

router.post("/", validatorCreate, createItem);

router.put("/:id", authMiddleware, checkRol(["admin"]), updateItem);

router.delete("/:id", authMiddleware, checkRol(["admin"]), validatorDelete, deleteItem);


module.exports = router 