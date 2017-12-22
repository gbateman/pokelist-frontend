import { connect } from 'react-redux';
import Home from '../components/Home.jsx';

function mapStateToProps(state) {
  return {
    routes: state.home.routes
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
