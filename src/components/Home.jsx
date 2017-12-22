import React from 'react';
import RoutesList from './RoutesList.jsx';

class Home extends React.Component {
  render() {
    const { routes } = this.props;
    return (
      <div className='container'>
        <div className='row'>
          <div className='xs-col-12'>
            <div className='pokelist-page-header'>Home</div>
            <RoutesList routes={routes} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
