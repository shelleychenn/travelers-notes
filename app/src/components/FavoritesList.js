import React from 'react';
import FavoritesListItem from './FavoritesListItem';

const FavoritesList = ({ favoritesList }) => {
  return (
    <div className="favorites-list">
      {favoritesList.map((favoritesListItem, index) => (
        <FavoritesListItem favoritesListItem={favoritesListItem} key={index} />
      ))}
    </div>
  );
};

export default FavoritesList;
