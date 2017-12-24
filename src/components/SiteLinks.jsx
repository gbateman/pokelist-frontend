import React from 'react';
import PropTypes from 'prop-types';

class SiteLinks extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className='site-links'>
        <a className='site-link' href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pok%C3%A9mon)`}>
          <img className='site-link-image' src='https://cdn.bulbagarden.net/upload/thumb/d/d4/Bulbapedia_bulb.png/20px-Bulbapedia_bulb.png' />
        </a>
        <a className='site-link' href={`https://www.serebii.net/pokedex-sm/${pokemon.number}.shtml`}>
          <img className='site-link-image' src='https://www.serebii.net/favicon.ico' />
        </a>

      </div>
    );
  }
}

SiteLinks.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default SiteLinks;
