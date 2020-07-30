import React from 'react';

const Attraction = ({ attraction, getReviews }) => {
  let review_snippet =
    attraction && attraction.review_snippet
      ? attraction.review_snippet.snippet
      : null;

  if (attraction.result_type === 'geos' && attraction.is_top_result === true) {
    return null;
  } else if (attraction.result_type !== 'geos' && attraction.result_object) {
    return (
      <div
        className="attraction-item"
        onClick={() => {
          getReviews(attraction.result_object.location_id);
        }}
      >
        <div className="attraction-name">{attraction.result_object.name}</div>
        <div>
          <img
            className="attraction-image"
            src={attraction.result_object.photo.images.small.url}
          ></img>
        </div>
        <div>{attraction.result_object.location_string}</div>
        <div>total reviews: {attraction.result_object.num_reviews}</div>
        <div className="attraction-caption">
          {attraction.result_object.caption}
        </div>
        <div>{attraction.result_object.photo.uploaded_date}</div>
        <div>address: {attraction.result_object.address}</div>
        <div>review: {review_snippet}</div>
        <div>type: {attraction.result_type}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default Attraction;
