import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home.jsx';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    okPokemonClick : id => {
      dispatch(togglePokemon(id));
    }
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
