import React from 'react';
import PropTypes from 'prop-types';
import RoutesList from './RoutesList.jsx';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchRoutes();
  }

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

Home.propTypes = {
  fetchRoutes: PropTypes.func.isRequired,
  routes: PropTypes.array
};

export default Home;
