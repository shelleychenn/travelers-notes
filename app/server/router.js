const router = require('express').Router();
const { saveAndSendReturnedAttraction } = require('./controller');

router.get('/location/:location_key_word', saveAndSendReturnedAttraction);

module.exports = router;
