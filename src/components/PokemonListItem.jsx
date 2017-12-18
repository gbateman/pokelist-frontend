import React from 'react';
import SiteLinks from './SiteLinks.jsx';

class PokemonListItem extends React.Component {
  render() {
    const { pokemon } = this.props;

    const image = pokemon.image && <img src={pokemon.image} />;

    return (
      <div className='pokemon-list-item'>
        <div>
          {image}
          {pokemon.name}
        </div>
        <SiteLinks pokemon={pokemon} />
      </div>
    );
  }
}

export default PokemonListItem;
