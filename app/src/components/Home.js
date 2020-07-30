import React from 'react';
import axios from 'axios';
import ItineraryEntryForm from './ItineraryEntryForm';
import Itinerary from './Itinerary';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itineraryEntries: [],
    };
    this.getSavedEntries = this.getSavedEntries.bind(this);
    this.submitNewItinerary = this.submitNewItinerary.bind(this);
  }

  componentDidMount() {
    this.getSavedEntries();
  }

  getSavedEntries() {
    axios
      .get('http://localhost:3000/itinerary')
      .then(({ data }) => {
        this.setState({
          itineraryEntries: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  submitNewItinerary(entry) {
    axios
      .post('http://localhost:3000/itinerary', {
        date: entry.date,
        time: entry.time,
        activity: entry.activity,
        location: entry.location,
        budget: entry.budget,
        notes: entry.notes,
      })
      .then(() => {
        console.log('new entry submitted successfully!');
        this.getSavedEntries();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        Home Page
        <button onClick={this.getSavedEntries}>get saved entries</button>
        <ItineraryEntryForm submitNewItinerary={this.submitNewItinerary} />
        <Itinerary itineraryEntries={this.state.itineraryEntries} />
      </>
    );
  }
}

export default Home;
