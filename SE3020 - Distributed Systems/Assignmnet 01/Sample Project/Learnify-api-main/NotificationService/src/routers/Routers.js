const express = require("express");
const router = express.Router();
const EmailController = require("../controllers/EmailController");
const SMSController = require("../controllers/SMSController");

router.post("/send-email", EmailController);
router.post("/send-sms", SMSController);

module.exports = router;
