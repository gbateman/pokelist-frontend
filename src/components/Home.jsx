import React from 'react';
import PokemonListContainer from '../containers/PokemonListContainer.jsx';

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='xs-col-12'>
            <div className='pokelist-page-header'>Home</div>
            <PokemonListContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
