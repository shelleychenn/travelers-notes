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
        let dataEntries;
        if (response.data.length === 1) {
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
