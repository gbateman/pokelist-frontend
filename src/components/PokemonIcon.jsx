import React from 'react';

class PokemonIcon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return <div className={'pokemon-icon pokemon-icon-' + pokemon.number} />;
  }
}

export default PokemonIcon;
