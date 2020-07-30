import React from 'react';
import { hot } from 'react-hot-loader/root';
import Explore from './components/Explore';
import Favorites from './components/Favorites';
import Home from './components/Home';
import Friends from './components/Friends';

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

    if (view === 'home') {
      return <Home />;
    } else if (view === 'explore') {
      return <Explore />;
    } else if (view === 'favorites') {
      return <Favorites />;
    } else if (view === 'friends') {
      return <Friends />;
    }
  }

  render() {
    return (
      <div className="app">
        <div className="nav">
          <span
            className="logo"
            onClick={() => {
              this.changeView('home');
            }}
          >
            Travel!
          </span>
          <span
            className={
              this.state.view === 'home' ? 'nav-selected' : 'nav-unselected'
            }
            onClick={() => {
              this.changeView('home');
            }}
          >
            Home
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
            🔖
          </span>
          <span
            className={
              this.state.view === 'friends' ? 'nav-selected' : 'nav-unselected'
            }
            onClick={() => {
              this.changeView('friends');
            }}
          >
            Friends
          </span>
        </div>
        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}

export default hot(App);
