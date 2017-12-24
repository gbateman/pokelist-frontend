import { connect } from 'react-redux';
import Home from '../components/Home.jsx';
import { fetchRoutes } from '../actions/HomeActions.js';

function mapStateToProps(state) {
  return {
    routes: state.home.routes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRoutes: () => {
      dispatch(fetchRoutes());
    }
  };
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
