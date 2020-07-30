import React from 'react';
import axios from 'axios';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.searchLocation = this.searchLocation.bind(this);
  }

  searchLocation() {
    axios
      .get('http://localhost:3000/location')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        Explore Page
        <button>search</button>
      </>
    );
  }
}

export default Explore;
