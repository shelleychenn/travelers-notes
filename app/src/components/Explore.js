import React from 'react';
import axios from 'axios';
import AttractionList from './AttractionList';
import SearchBar from './SearchBar';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'london',
      attractions: [],
    };
    this.searchLocation = this.searchLocation.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
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
        console.log('5', this.state.attractions);
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

  render() {
    return (
      <>
        <div className="search-bar">
          <SearchBar changeLocation={this.changeLocation} />
        </div>
        <AttractionList attractions={this.state.attractions} />
        <button onClick={this.searchLocation}>search</button>
      </>
    );
  }
}

export default Explore;
