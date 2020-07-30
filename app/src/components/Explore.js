import React from 'react';
import axios from 'axios';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attractions: [],
    };
    this.searchLocation = this.searchLocation.bind(this);
  }

  searchLocation() {
    axios
      .get('http://localhost:3000/location')
      .then((response) => {
        console.log(response.data);
        this.setState({
          attractions: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        Explore Page
        <button onClick={this.searchLocation}>search</button>
      </>
    );
  }
}

export default Explore;
