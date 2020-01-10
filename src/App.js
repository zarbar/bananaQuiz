import React from 'react';
import './components/BackgroundImagePage.css';
import Home from './components/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Questions from './components/questions/questions';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Hello these are some test words
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/questions' component={Questions} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
