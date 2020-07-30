import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review">
      <div>rating: {review.rating}</div>
      <div>travel date: {review.travel_date}</div>
      <div>username: {review.user.username}</div>
      <div>
        <img src={review.user.avatar.small.url}></img>
      </div>

      <div>summary: {review.title}</div>
      <div>review: {review.text}</div>
      <div>date: {review.published_date}</div>
      <br />
    </div>
  );
};

export default Review;
