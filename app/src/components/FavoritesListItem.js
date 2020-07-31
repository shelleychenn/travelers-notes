import React from 'react';

const FavoritesListItem = ({ favoritesListItem }) => {
  return (
    <div className="favorites-list-item">
      <div>{favoritesListItem.name}</div>
      <div>
        <img src={favoritesListItem.image_url}></img>
      </div>
      <div>{favoritesListItem.location}</div>
      <div>{favoritesListItem.address}</div>
      <div>{favoritesListItem.num_of_reviews}</div>
    </div>
  );
};

export default FavoritesListItem;
