import React from 'react';

const Attraction = ({ attraction }) => {
  if (attraction.result_type === 'geos' && attraction.is_top_result === true) {
    return null;
  } else if (attraction.result_type !== 'geos') {
    return (
      <div className="attraction-item">
        <div className="attraction-name">{attraction.result_object.name}</div>
        <div>
          <img src={attraction.result_object.photo.images.small.url}></img>
        </div>
        <div>{attraction.result_object.location_string}</div>
        <div>{attraction.result_object.num_reviews}</div>
        <div className="attraction-caption">
          {attraction.result_object.caption}
        </div>
        <div>{attraction.result_object.photo.uploaded_date}</div>
        <div>{attraction.result_object.address}</div>
        <div>{attraction.review_snippet.snippet}</div>
        <div>{attraction.result_type}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default Attraction;
