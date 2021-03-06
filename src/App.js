import React from 'react';
import './components/BackgroundImagePage.css';
import Home from './components/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Questions from './components/questions/questions';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/bananaQuiz/' component={Home} />
          <Route path='/questions' component={Questions} />
        </Router>
      </div>
    );
  }
}

export default App;
