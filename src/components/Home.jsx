import React from 'react';
import PropTypes from 'prop-types';
import RoutesList from './RoutesList.jsx';
import MyTeam from './MyTeam.jsx';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    const { routes, myTeamVisible, openMyTeam, closeMyTeam } = this.props;

    return (
      <div className='pokelist-home'>
        <div className='container pokelist-home-content'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='pokelist-page-header'>Home</div>
              <RoutesList routes={routes} />
            </div>
          </div>
        </div>
        <div className='open-my-team-button' onClick={openMyTeam}>
          <div className='open-my-team-arrow'>
            ❮
          </div>
        </div>
        <MyTeam myTeamVisible={myTeamVisible} closeMyTeam={closeMyTeam}
          pokemon={routes.length > 0 ? routes[0].pokemon : []} />
      </div>
    );
  }
}

Home.propTypes = {
  fetchRoutes: PropTypes.func.isRequired,
  routes: PropTypes.array,
  openMyTeam: PropTypes.func.isRequired,
  closeMyTeam: PropTypes.func.isRequired,
  myTeamVisible: PropTypes.bool.isRequired
};

export default Home;
