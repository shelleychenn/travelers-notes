import React from 'react';
import axios from 'axios';

let addToFavorites = (attraction) => {
  axios
    .post('http://localhost:3000/favorites', {
      name: attraction.result_object.name,
      image_url: attraction.result_object.photo.images.small.url,
      location: attraction.result_object.location_string,
      num_of_reviews: attraction.result_object.num_reviews,
      address: attraction.result_object.address,
    })
    .then(() => {
      console.log('attraction added to favorites list!');
    })
    .catch((err) => {
      console.log(err);
    });
};

const Attraction = ({ attraction, getReviews }) => {
  let review_snippet =
    attraction && attraction.review_snippet
      ? attraction.review_snippet.snippet
      : null;

  if (attraction.result_type === 'geos' && attraction.is_top_result === true) {
    return null;
  } else if (attraction.result_type !== 'geos' && attraction.result_object) {
    return (
      <>
        <div className="attraction-item">
          <div
            onClick={() => {
              getReviews(attraction.result_object.location_id);
            }}
          >
            <div className="attraction-name">
              {attraction.result_object.name}
            </div>
            <div>
              <img
                className="attraction-image"
                src={attraction.result_object.photo.images.small.url}
              ></img>
            </div>
            <div>{attraction.result_object.location_string}</div>
            <div>Total reviews: {attraction.result_object.num_reviews}</div>
            <div className="attraction-caption">
              {attraction.result_object.caption}
            </div>
            <div>
              {attraction.result_object.photo.uploaded_date.slice(0, 10)}
            </div>
            <div>Address: {attraction.result_object.address}</div>
            <div>Review: {review_snippet}</div>
          </div>
          <div
            className="bookmark-attraction-button"
            onClick={() => {
              addToFavorites(attraction);
            }}
          >
            ＋
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Attraction;
