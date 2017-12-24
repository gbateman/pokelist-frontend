import React from 'react';
import { padToThree } from '../utils/utils.js';

class PokemonIcon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return <div className={'pokemon-icon pokemon-icon-' + padToThree(pokemon.number)} />;
  }
}

export default PokemonIcon;
