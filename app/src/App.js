import React from 'react';
import { hot } from 'react-hot-loader/root';
import Explore from './components/Explore';
import Favorites from './components/Favorites';
import Profile from './components/Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'explore',
    };
  }

  renderView() {
    const { view } = this.state;

    if (view === 'explore') {
      return <Explore />;
    } else if (view === 'favorites') {
      return <Favorites />;
    } else if (view === 'profile') {
      return <Profile />;
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Hello </h1>
      </div>
    );
  }
}

export default hot(App);
