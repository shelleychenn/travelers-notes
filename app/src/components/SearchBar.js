import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      location: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.changeLocation(this.state.location);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            value={this.state.location}
            onChange={this.handleChange}
            placeholder="santorini"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar;
