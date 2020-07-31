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
        this.getAllFavorites();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <div className="favorites-title"> 📍Bookmarked </div>
        <div className="favorites-container">
          <div>
            <FavoritesList
              favoritesList={this.state.favoritesList}
              deleteFavoritesEntry={this.deleteFavoritesEntry}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Favorites;
