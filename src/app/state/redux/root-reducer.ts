import { combineReducers } from 'redux';

import pokemonsReducer from 'State/redux/pokemons/pokemons.reducer';
import userReducer from 'State/redux/user/user.reducer';

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;