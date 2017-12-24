import React from 'react';
import PokemonListItem from './PokemonListItem.jsx';

class PokemonList extends React.Component {
  render() {
    const { pokemon } = this.props;
    return pokemon.map(aPokemon =>
      <PokemonListItem key={aPokemon.name} pokemon={aPokemon} />
    );
  }
}

export default PokemonList;
