import { connect } from 'react-redux';
import Home from '../components/Home.jsx';
import { fetchRoutes, openMyTeam, closeMyTeam } from '../actions/HomeActions.js';

function mapStateToProps(state) {
  return {
    routes: state.home.routes,
    myTeamVisible: state.home.myTeamVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRoutes: () => dispatch(fetchRoutes()),
    openMyTeam: () => dispatch(openMyTeam()),
    closeMyTeam: () => dispatch(closeMyTeam()),
  };
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
