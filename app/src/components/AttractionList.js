import React from 'react';
import Attraction from './Attraction';

const AttractionList = ({ attractions }) => {
  let locationOverview;
  if (
    attractions &&
    attractions[0] &&
    attractions[0].result_type === 'geos' &&
    attractions[0].is_top_result === true
  ) {
    locationOverview = (
      <div>
        <div className="attraction-name">
          {attractions[0].result_object.name}
        </div>
        <div className="location-images">
          <div>
            <img
              src={attractions[0].result_object.photo.images.small.url}
            ></img>
          </div>
          <div>
            <img
              className="location-map"
              src={attractions[0].result_object.map_image_url}
            ></img>
          </div>
        </div>
        <div className="location-geo-description">
          {attractions[0].result_object.geo_description}
        </div>
      </div>
    );
  } else {
    locationOverview = null;
  }
  console.log('here', attractions);
  return (
    <>
      <div className="attraction-item-location">{locationOverview}</div>
      <div className="attraction-list">
        {attractions.slice(1).map((attraction, index) => (
          <Attraction attraction={attraction} key={index} />
        ))}
      </div>
    </>
  );
};

export default AttractionList;
