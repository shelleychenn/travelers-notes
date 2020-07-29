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
    this.changeView = this.changeView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option,
    });
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
        <div className="nav">
          <span
            className="logo"
            onClick={() => {
              this.changeView('explore');
            }}
          >
            Travel!
          </span>
          <span
            className={
              this.state.view === 'explore' ? 'nav-selected' : 'nav-unselected'
            }
            onClick={() => {
              this.changeView('explore');
            }}
          >
            Explore
          </span>
          <span
            className={
              this.state.view === 'favorites'
                ? 'nav-selected'
                : 'nav-unselected'
            }
            onClick={() => {
              this.changeView('favorites');
            }}
          >
            ♥
          </span>
          <span
            className={
              this.state.view === 'profile' ? 'nav-selected' : 'nav-unselected'
            }
            onClick={() => {
              this.changeView('profile');
            }}
          >
            Profile
          </span>
        </div>
      </div>
    );
  }
}

export default hot(App);
