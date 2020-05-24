import { all, call } from 'redux-saga/effects';
import { pokemonsSagas } from 'State/redux/pokemons/pokemons.sagas';
import { userSagas } from 'State/redux/user/user.sagas';

export default function* rootSaga() {
  yield all([call(pokemonsSagas), call(userSagas)]);
}
