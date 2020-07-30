import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews, returnToAttractionPage }) => {
  return (
    <div className="review-list">
      <div className="revert-button" onClick={returnToAttractionPage}>
        ↵
      </div>
      {reviews.map((review, index) => (
        <Review review={review} key={index} />
      ))}
    </div>
  );
};

export default ReviewList;
