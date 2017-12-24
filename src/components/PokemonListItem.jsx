import React from 'react';
import PropTypes from 'prop-types';
import SiteLinks from './SiteLinks.jsx';
import PokemonIcon from './PokemonIcon.jsx';

class PokemonListItem extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className='pokemon-list-item'>
        <div className='pokemon-list-item-left-container'>
          <PokemonIcon pokemon={pokemon} />
          <div className='pokemon-list-item-name'>{pokemon.name}</div>
        </div>
        <SiteLinks pokemon={pokemon} />
      </div>
    );
  }
}

PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonListItem;
