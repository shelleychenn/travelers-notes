import React from 'react';
import FavoritesListItem from './FavoritesListItem';

const FavoritesList = ({ favoritesList, deleteFavoritesEntry }) => {
  return (
    <div className="favorites-list">
      {favoritesList.map((favoritesListItem, index) => (
        <FavoritesListItem
          favoritesListItem={favoritesListItem}
          key={index}
          deleteFavoritesEntry={deleteFavoritesEntry}
        />
      ))}
    </div>
  );
};

export default FavoritesList;
