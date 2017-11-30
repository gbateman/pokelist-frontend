import React from 'react';

class PokemonList extends React.Component {
  componentDidMount() {
    this.props.fetchPokemon();
  }

  render() {
    const { pokemon } = this.props;
    return pokemon.map((aPokemon) =>
      <p key={aPokemon.name}>{aPokemon.name}</p>
    );
  }
}

export default PokemonList;
