import React from 'react';

const Attraction = ({ attraction }) => {
  if (attraction.result_type === 'geos' && attraction.is_top_result === true) {
    return (
      <div className="attraction-item-location">
        <div>{attraction.result_object.name}</div>
        <div>{attraction.result_object.num_reviews}</div>
        <div>{attraction.result_object.photo.images.small.url}</div>
        <div>{attraction.result_object.ploaded_date}</div>
        <div>{attraction.geo_description}</div>
      </div>
    );
  } else if (attraction.result_type !== 'geos') {
    return (
      <div className="attraction-item">
        <div>{attraction.result_type}</div>
        <div>{attraction.result_object.name}</div>
        <div>{attraction.result_object.num_reviews}</div>
        <div>{attraction.result_object.location_string}</div>
        <div>{attraction.result_object.photo.images.small.url}</div>
        <div>{attraction.result_object.caption}</div>
        <div>{attraction.result_object.photo.uploaded_date}</div>
        <div>{attraction.result_object.address}</div>
        <div>{attraction.review_snippet.snippet}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default Attraction;
