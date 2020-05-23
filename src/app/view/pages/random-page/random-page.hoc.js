import { connect } from 'react-redux';
import { fetchRandomPokemonAsync } from 'State/redux/pokemons/pokemons.actions';
import { getPokemonImgReference } from 'Api/firebase/firebase.utils';

import RandomPage from '../random-page/random-page.component';
const mapStateToProps = ({ pokemons: { randomPokemon, isFetching } }) => ({
  pokemon: randomPokemon,
  isFetching,
  getPokemonImgReference
});

const mapDispatchToProps = dispatch => ({
  fetchRandomPokemonAsync: () => dispatch(fetchRandomPokemonAsync())
});

const RandomPokemonPageHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomPage);

export default RandomPokemonPageHOC;
