const router = require('express').Router();
const {
  saveAndSendReturnedAttraction,
  loadMoreReviews,
  addItinerary,
  getAllItinerary,
  deleteItinerary,
} = require('./controller');

router.get('/location/:location_key_word', saveAndSendReturnedAttraction);

router.get('/location/reviews/:location_id', loadMoreReviews);

router.post('/itinerary', addItinerary);

router.get('/itinerary', getAllItinerary);

router.delete('/itinerary/:id', deleteItinerary);

module.exports = router;
