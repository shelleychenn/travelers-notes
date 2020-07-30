import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review review={review} key={index} />
      ))}
    </div>
  );
};

export default ReviewList;
