const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../middlewares/handleHero");
const { getItems, getItem, createItem, deleteItem } = require("../controllers/hero");
const { validatorGet, validatorDelete } = require('../validators/hero');
const authMiddleware = require('../middlewares/handleSession');
const checkRol = require('../middlewares/handleRoles');


router.get("/", getItems);

router.get("/:id", validatorGet, getItem);

router.post("/", authMiddleware, checkRol(["admin"]), uploadMiddleware.single('hero'), createItem);

// router.put("/:id", authMiddleware, checkRol(["admin"]), updateItem);

router.delete("/:id", authMiddleware, checkRol(["admin"]), validatorDelete, deleteItem);


module.exports = router