const express = require("express");
const router = express.Router();
// const {private} = require("../controllers/private");
const { getPrivateData } = require("../controllers/private");


// router.route("/").get(private);
// console.log(private);
// router.route("/").get(getPrivateData);

module.export = router;