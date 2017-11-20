import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';

class App extends React.Component {
  componentDidMount() {
    document.title = "PokéList";
  }

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path="/" render={() => <Home />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </Router>
    );
  }
}

export default App;
