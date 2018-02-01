import React from 'react';
import PropTypes from 'prop-types';
import PokemonListItem from './PokemonListItem.jsx';

class PokemonList extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className='pokemon-list'>
        {pokemon.map(aPokemon =>
          <PokemonListItem key={aPokemon.name} pokemon={aPokemon} />
        )}
      </div>
    );
  }
}

PokemonList.propTypes = {
  pokemon: PropTypes.array.isRequired
};

export default PokemonList;
