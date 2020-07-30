import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review-container">
      <div className="reviewer-info">
        <div>
          <img src={review.user.avatar.small.url}></img>
        </div>
        <div>
          {review.user.username}, {review.published_date.slice(0, 10)}
        </div>
      </div>
      <div className="review">
        <div>Rating: {review.rating}</div>
        <div>Travel date: {review.travel_date}</div>
        <div>Summary: {review.title}</div>
        <div>Review: {review.text}</div>

        <br />
      </div>
    </div>
  );
};

export default Review;
