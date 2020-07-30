import React from 'react';
import Attraction from './Attraction';

const AttractionList = ({ attractions }) => {
  return (
    <div className="attraction-list">
      {attractions.map((attraction, index) => (
        <Attraction attraction={attraction} key={index} />
      ))}
    </div>
  );
};

export default AttractionList;
