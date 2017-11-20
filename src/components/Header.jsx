import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar pokelist-navbar">
        <div className="navbar-header">
          <div className="navbar-brand">PokéList</div>
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-right navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/">Action</Link></li>
            <li><Link to="/">Another Action!!</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
