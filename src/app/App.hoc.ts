import { connect } from 'react-redux';
import Redux from 'redux';
import App from './App';

import { checkUserSession } from 'State/redux/user/user.actions';
import { RootState } from 'State/redux/root-reducer';

interface OwnProps {}

interface StateProps {
  userData: any;
  currentPokemon: any;
  isLoadingUser: any;
}

interface DispatchProps {
  checkUserSession: () => void;
}

export type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps = ({
  user: { userData, isLoadingUser },
  pokemons: { currentPokemon }
}: RootState): StateProps => ({
  userData,
  currentPokemon,
  isLoadingUser
});

const mapDispatchToProps = (dispatch: Redux.Dispatch, ownProps: OwnProps): DispatchProps => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const AppHOC = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(App);

export default AppHOC;
