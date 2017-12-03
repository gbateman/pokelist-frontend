import React from 'react';
import SiteLinks from './SiteLinks';

class PokemonListItem extends React.Component {
  render() {
    const { pokemon } = this.props;

    const image = pokemon.image && <img src={pokemon.image} />;

    return (
      <div className='pokemon-list-item'>
        {image}{pokemon.name}
      </div>
    );
  }
}

export default PokemonListItem;
