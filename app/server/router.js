const router = require('express').Router();
const { saveAndSendReturnedAttraction } = require('./controller');

router.get('/location', saveAndSendReturnedAttraction);

module.exports = router;
