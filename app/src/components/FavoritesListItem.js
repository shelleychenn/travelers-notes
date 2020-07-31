import React from 'react';

const FavoritesListItem = ({ favoritesListItem }) => {
  return (
    <div className="favorites-list-item">
      <div className="favorites-list-item-image">
        <img src={favoritesListItem.image_url}></img>
      </div>
      <div className="favorites-list-item-info">
        <div className="favorites-list-item-name">{favoritesListItem.name}</div>
        <div>{favoritesListItem.location}</div>
        <div>{favoritesListItem.address}</div>
        <div>Reviews: {favoritesListItem.num_of_reviews}</div>
      </div>
    </div>
  );
};

export default FavoritesListItem;
