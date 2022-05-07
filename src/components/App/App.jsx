// App.js
import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Comments from '../Comments/Comments';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import ThankYou from '../ThankYou/ThankYou';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {



  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <div>
          <Route exact path="/">
            <Feeling />
          </Route>
        </div>
        <div>
          <Route exact path="/understanding">
            <Understanding />
          </Route>
        </div>
        <div>
          <Route exact path="/support">
            <Support />
          </Route>
        </div>
        <div>
          <Route exact path="/comments">
            <Comments />
          </Route>
        </div>
        <div>
          <Route exact path="/thankyou">
            <ThankYou />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;

