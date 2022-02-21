const express = require("express");
const router = express.Router();
const {private} = require("../controllers/private");

router.route("/").get(private);

module.export = router;