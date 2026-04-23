const express = require("express");
const router = express.Router();
const piadaController = require("../controllers/piadaController");

router.get("/piada", piadaController.buscarPiada);

module.exports = router;