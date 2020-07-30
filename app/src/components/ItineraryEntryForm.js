import React from 'react';

class ItineraryEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      activity: '',
      location: '',
      budget: '',
      notes: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let changes = {};
    changes[e.target.name] = e.target.value;
    this.setState(changes);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitNewItinerary(this.state);
  }

  render() {
    return (
      <div className="itinerary-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              className="itinerary-form-input"
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              placeholder="08/01/2020"
              required
            />
          </div>
          <input
            className="itinerary-form-input"
            type="text"
            name="time"
            value={this.state.time}
            onChange={this.handleChange}
            placeholder="3:00pm"
          ></input>
          <input
            className="itinerary-form-input"
            type="text"
            name="activity"
            value={this.state.activity}
            onChange={this.handleChange}
            placeholder="Departing Flight"
            required
          ></input>
          <input
            className="itinerary-form-input"
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            placeholder="JFK, Terminal 1"
            required
          ></input>

          <input
            className="itinerary-form-input"
            type="number"
            name="budget"
            value={this.state.budget}
            onChange={this.handleChange}
            placeholder="Amount $"
          ></input>

          <textarea
            className="itinerary-form-textarea"
            type="text"
            placeholder="notes"
            name="notes"
            value={this.state.notes}
            onChange={this.handleChange}
          ></textarea>
          <button className="button" type="submit" value="Submit">
            Add Itinerary
          </button>
        </form>
      </div>
    );
  }
}

export default ItineraryEntryForm;
