const router = require('express').Router();
const {
  saveAndSendReturnedAttraction,
  loadMoreReviews,
  addItinerary,
  getAllItinerary,
  deleteItinerary,
  addToFavorites,
  getAllFavorites,
  deleteFavorites,
} = require('./controller');

router.get('/location/:location_key_word', saveAndSendReturnedAttraction);

router.get('/location/reviews/:location_id', loadMoreReviews);

router.post('/itinerary', addItinerary);

router.get('/itinerary', getAllItinerary);

router.delete('/itinerary/:id', deleteItinerary);

router.post('/favorites', addToFavorites);

router.get('/favorites', getAllFavorites);

router.delete('/favorites/:id', deleteFavorites);

module.exports = router;
