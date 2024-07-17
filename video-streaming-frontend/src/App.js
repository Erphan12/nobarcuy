import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/videos/:id" component={VideoPage} />
      </Switch>
    </Router>
  );
}

export default App;
