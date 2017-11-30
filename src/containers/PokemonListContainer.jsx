import { connect } from 'react-redux';
import PokemonList from '../components/PokemonList.jsx';
import { fetchPokemon } from '../actions/HomeActions.js';

function mapStateToProps(state) {
  return {
    pokemon: state.home.pokemon
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemon: () => {
      dispatch(fetchPokemon());
    }
  };
}

const PokemonListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList);

export default PokemonListContainer;
