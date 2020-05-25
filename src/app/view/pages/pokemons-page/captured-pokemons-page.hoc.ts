import { connect } from 'react-redux';
import PokemonsPage from './pokemons-page.component';
import { fetchCapturedPokemons } from 'App/state/redux/pokemons/new.actions';

const mapStateToProps = ({
  pokemons: { capturedPokemons, shouldCapturedPokemonsRefetch }
}) => ({
  collection: capturedPokemons,
  shouldRefetch: shouldCapturedPokemonsRefetch
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(fetchCapturedPokemons())
});

const CapturedPokemonsPageHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsPage);

export default CapturedPokemonsPageHOC;
