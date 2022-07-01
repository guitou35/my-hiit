const express = require("express");
const router = express.Router();

const routerMuscles = require("./muscle");

router.use("/muscles", routerMuscles);

module.exports = router;
