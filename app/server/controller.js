const axios = require('axios');
const { API_KEY } = require('./api_key');
const AttractionEntry = require('../db/Attraction');

module.exports = {
  saveAndSendReturnedAttraction: (req, res) => {
    let url = `https://tripadvisor1.p.rapidapi.com/locations/search?rapidapi-key=${API_KEY}&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=mi&query=pattaya`;

    axios
      .get(url)
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    let returnedAttraction = new AttractionEntry({});
  },
};
