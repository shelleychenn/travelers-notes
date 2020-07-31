import React from 'react';
import axios from 'axios';
import FavoritesList from './FavoritesList';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesList: [],
    };
    this.getAllFavorites = this.getAllFavorites.bind(this);
    this.deleteFavoritesEntry = this.deleteFavoritesEntry.bind(this);
  }

  componentDidMount() {
    this.getAllFavorites();
  }

  getAllFavorites() {
    axios
      .get('http://localhost:3000/favorites')
      .then(({ data }) => {
        console.log('fave list data:', data);
        this.setState({
          favoritesList: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteFavoritesEntry(id) {
    axios
      .delete(`http://localhost:3000/favorites/${id}`)
      .then(() => {
        console.log('entry deleted!');
        this.getAllFavorites();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.favoritesList);
    return (
      <div className="favorites-container">
        <FavoritesList
          favoritesList={this.state.favoritesList}
          deleteFavoritesEntry={this.deleteFavoritesEntry}
        />
      </div>
    );
  }
}

export default Favorites;
