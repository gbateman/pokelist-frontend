import React from 'react';
import PropTypes from 'prop-types';
import PokemonListItem from './PokemonListItem.jsx';

class PokemonList extends React.Component {
  render() {
    const { pokemon } = this.props;
    return pokemon.map(aPokemon =>
      <PokemonListItem key={aPokemon.name} pokemon={aPokemon} />
    );
  }
}

PokemonList.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonList;
