import React from 'react';
import './components/BackgroundImagePage.css';
import Home from './components/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Questions from './components/questions/questions';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Test words on App.js, please remove when problem resolved
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/questions' component={Questions} />
        </Router>
      </div>
    );
  }
}

export default App;
