import React from 'react';
import PropTypes from 'prop-types';
import PokemonList from './PokemonList.jsx';

class MyTeam extends React.Component {
  render() {
    const { myTeamVisible, closeMyTeam, pokemon } = this.props;

    return (
      <div className={'my-team' + (myTeamVisible ? ' visible' : '')}>
        <div className='my-team-wrapper'>
          <div className='my-team-header'>
            <div className='my-team-title'>
              My Team
            </div>
            <div className='close-my-team-button' onClick={closeMyTeam}>
              &times;
            </div>
          </div>
          <div className='my-team-pokemon-list-wrapper'>
            <PokemonList pokemon={pokemon} />
          </div>
        </div>
      </div>
    );
  }
}

MyTeam.propTypes = {
  myTeamVisible: PropTypes.bool.isRequired,
  closeMyTeam: PropTypes.func.isRequired,
  pokemon: PropTypes.array
};

export default MyTeam;
