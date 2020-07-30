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
    this.deleteItineraryEntry = this.deleteItineraryEntry.bind(this);
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
        console.log('new entry submitted!');
        this.getSavedEntries();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteItineraryEntry(id) {
    axios
      .delete(`http://localhost:3000/itinerary/${id}`)
      .then(() => {
        console.log('entry deleted!');
        this.getSavedEntries();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-container-form">
          <ItineraryEntryForm submitNewItinerary={this.submitNewItinerary} />
        </div>
        <div className="home-container-itinerary">
          <Itinerary
            itineraryEntries={this.state.itineraryEntries}
            deleteItineraryEntry={this.deleteItineraryEntry}
          />
        </div>
      </div>
    );
  }
}

export default Home;
