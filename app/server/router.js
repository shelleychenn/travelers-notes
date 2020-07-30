const router = require('express').Router();
const {
  saveAndSendReturnedAttraction,
  loadMoreReviews,
} = require('./controller');

router.get('/location/:location_key_word', saveAndSendReturnedAttraction);

router.get('/location/reviews/:location_id', loadMoreReviews);

module.exports = router;
