import React from 'react';
import PropTypes from 'prop-types';
import { padToThree } from '../utils/utils.js';

class PokemonIcon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return <div className={'pokemon-icon pokemon-icon-' + padToThree(pokemon.number)} />;
  }
}

PokemonIcon.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonIcon;
