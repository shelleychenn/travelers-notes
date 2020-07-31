const axios = require('axios');
// const { API_KEY } = require('./api_key');
const AttractionEntry = require('../db/Attraction');
const ReviewEntry = require('../db/Review');
const ItineraryEntry = require('../db/Itinerary');
const FavoriteEntry = require('../db/Favorite');
const API_KEY = process.env.API_KEY;

module.exports = {
  saveAndSendReturnedAttraction: (req, res) => {
    let location = req.params.location_key_word;

    AttractionEntry.find({ search_key: location })
      .count()
      .then((count) => {
        if (count !== 0) {
          AttractionEntry.find({ search_key: location })
            .then((data) => {
              res.status(200).json(data);
            })
            .catch((err) => {
              console.log(err);
              res.sendStatus(500);
            });
        } else {
          let url = `https://tripadvisor1.p.rapidapi.com/locations/search?rapidapi-key=${API_KEY}&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=mi&query=${location}`;

          axios
            .get(url)
            .then((response) => {
              let attractions = response.data.data;
              let returnedAttractions = new AttractionEntry({
                search_key: location,
                attractions: attractions,
              });

              returnedAttractions
                .save()
                .then(() => {
                  res.status(200).json(attractions);
                })
                .catch((err) => {
                  console.log(err);
                  res.sendStatus(500);
                });
            })
            .catch((err) => {
              console.log(err);
              res.sendStatus(500);
            });
        }
      });
  },

  loadMoreReviews: (req, res) => {
    let locationId = req.params.location_id;

    ReviewEntry.find({
      search_type: 'reviews',
      location_id: locationId,
    })
      .count()
      .then((count) => {
        if (count !== 0) {
          ReviewEntry.find({
            search_type: 'reviews',
            location_id: locationId,
          })
            .then((data) => {
              res.status(200).json(data);
            })
            .catch((err) => {
              console.log(err);
              res.sendStatus(500);
            });
        } else {
          let url = `https://tripadvisor1.p.rapidapi.com/reviews/list?rapidapi-key=${API_KEY}&limit=20&currency=USD&lang=en_US&location_id=${locationId}`;

          axios
            .get(url)
            .then((response) => {
              let reviews = response.data.data;

              let returnedReviews = new ReviewEntry({
                search_type: 'reviews',
                location_id: locationId,
                reviews: reviews,
              });

              returnedReviews
                .save()
                .then(() => {
                  res.status(200).json(reviews);
                })
                .catch((err) => {
                  console.log(err);
                  res.sendStatus(500);
                });
            })
            .catch((err) => {
              console.log(err);
              res.sendStatus(500);
            });
        }
      });
  },

  addItinerary: (req, res) => {
    let newEntry = new ItineraryEntry({
      date: req.body.date,
      time: req.body.time,
      activity: req.body.activity,
      location: req.body.location,
      budget: req.body.budget,
      notes: req.body.notes,
    });

    newEntry
      .save()
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  getAllItinerary: (req, res) => {
    ItineraryEntry.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  deleteItinerary: (req, res) => {
    let itemId = req.params.id;
    ItineraryEntry.deleteOne({ _id: itemId })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  addToFavorites: (req, res) => {
    let newFavoriteEntry = new FavoriteEntry({
      name: req.body.name,
      image_url: req.body.image_url,
      location: req.body.location,
      num_of_reviews: req.body.num_of_reviews,
      address: req.body.address,
    });

    newFavoriteEntry
      .save()
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  getAllFavorites: (req, res) => {
    FavoriteEntry.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  deleteFavorites: (req, res) => {
    let itemId = req.params.id;
    FavoriteEntry.deleteOne({ _id: itemId })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
