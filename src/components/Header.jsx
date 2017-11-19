import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top pokelist-navbar">
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
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
