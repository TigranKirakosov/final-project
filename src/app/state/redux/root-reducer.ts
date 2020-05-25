import { combineReducers } from 'redux';

import pokemonsReducer from 'State/redux/pokemons/new.reducer';
import userReducer from 'State/redux/user/user.reducer';

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  user: userReducer
});
