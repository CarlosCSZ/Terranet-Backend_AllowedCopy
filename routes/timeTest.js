const express = require('express');
const router = express.Router();
const timeMiddleware = require("../middlewares/handleTime");
const uploadMiddleware = require("../middlewares/handleHero");
const measureTime = require('../controllers/timeTest');


router.post("/", timeMiddleware, uploadMiddleware.single("test"), measureTime);


module.exports = router
