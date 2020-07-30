import React from 'react';
import axios from 'axios';
import AttractionList from './AttractionList';
import SearchBar from './SearchBar';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
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
      .get('http://localhost:3000/location', { location: this.state.location })
      .then((response) => {
        let dataEntries;
        if (response.data.length < 10) {
          dataEntries = response.data[0].attractions;
          console.log(dataEntries);
        } else {
          dataEntries = response.data;
          console.log(dataEntries);
        }
        this.setState({
          attractions: dataEntries,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeLocation(location) {
    this.setState({
      location: location,
    });
    this.searchLocation();
  }

  render() {
    return (
      <>
        <SearchBar changeLocation={this.changeLocation} />
        <AttractionList attractions={this.state.attractions} />
        <button onClick={this.searchLocation}>search</button>
      </>
    );
  }
}

export default Explore;
