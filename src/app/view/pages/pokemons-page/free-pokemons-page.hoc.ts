import { connect } from 'react-redux';
import PokemonsPage from './pokemons-page.component';
import { fetchFreePokemons } from 'App/state/redux/pokemons/new.actions';

const mapStateToProps = ({
  pokemons: { freePokemons, shouldFreePokemonsRefetch }
}) => ({
  collection: freePokemons,
  shouldRefetch: shouldFreePokemonsRefetch
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(fetchFreePokemons())
});

const FreePokemonsPageHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsPage);

export default FreePokemonsPageHOC;
