import React from 'react';
import axios from 'axios';
import AttractionList from './AttractionList';
import SearchBar from './SearchBar';
import ReviewList from './ReviewList';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'default',
      location: 'london',
      attractions: [],
      reviews: [],
    };
    this.searchLocation = this.searchLocation.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.returnToAttractionPage = this.returnToAttractionPage.bind(this);
  }

  componentDidMount() {
    this.searchLocation();
  }

  searchLocation() {
    axios
      .get(`http://localhost:3000/location/${this.state.location}`)
      .then((response) => {
        if (response.data.length < 10) {
          this.setState({
            attractions: response.data[0].attractions,
          });
        } else {
          this.setState({
            attractions: response.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeLocation(location) {
    this.setState(
      {
        location: location,
      },
      () => {
        this.searchLocation();
      }
    );
  }

  getReviews(locationId) {
    axios
      .get(`http://localhost:3000/location/reviews/${locationId}`)
      .then((response) => {
        if (response.data[0].reviews) {
          console.log('fetched from db', response.data[0].reviews);
          this.setState({
            view: 'reviews',
            reviews: response.data[0].reviews,
          });
        } else {
          console.log('fetched from API', response.data);
          this.setState({
            view: 'reviews',
            reviews: response.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  returnToAttractionPage() {
    this.setState({
      view: 'default',
    });
  }

  render() {
    let listToRender;

    if (this.state.view === 'default') {
      listToRender = (
        <AttractionList
          attractions={this.state.attractions}
          getReviews={this.getReviews}
        />
      );
    } else if (this.state.view === 'reviews') {
      listToRender = (
        <ReviewList
          reviews={this.state.reviews}
          returnToAttractionPage={this.returnToAttractionPage}
        />
      );
    }

    return (
      <>
        <div className="explore-page-nav">
          <div className="search-bar">
            <SearchBar changeLocation={this.changeLocation} />
          </div>
        </div>
        <div className="explore-view-container">{listToRender}</div>
        <button onClick={this.getReviews}>Reviews</button>
      </>
    );
  }
}

export default Explore;
