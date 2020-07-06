import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Header {...props} />} />
          <Route exact path="/home" render={(props) => <Home {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
