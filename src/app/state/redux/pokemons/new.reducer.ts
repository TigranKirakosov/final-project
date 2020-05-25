import { createReducer } from '@reduxjs/toolkit';
import { setFreePokemons, setCapturedPokemons, setRandomPokemon, catchSingle, setSingleFree } from './new.actions';
import { setCurrentPokemon } from './pokemons.actions';

const INITIAL_STATE = {
  freePokemons: [],
  shouldFreePokemonsRefetch: true,
  shouldCapturedPokemonsRefetch: true,
  capturedPokemons: [],
  currentPokemon: {},
  randomPokemon: {},
  isFetching: false,
  errorMessage: null
};

const pokemonsReducer = createReducer(INITIAL_STATE, {
  [setFreePokemons.type]: (state, action) => {
    state.isFetching = false;
    state.shouldFreePokemonsRefetch = false;
    state.freePokemons = action.payload.sort((a, b) => a.photoId - b.photoId);
    state.errorMessage = null;
  },
  [setCapturedPokemons.type]: (state, action) => {
    state.isFetching = false;
    state.shouldCapturedPokemonsRefetch = false;
    state.capturedPokemons = action.payload.sort((a, b) => a.photoId - b.photoId);
    state.errorMessage = null;
  },
  [setRandomPokemon.type]: (state, action) => {
    state.isFetching = false;
    state.randomPokemon = action.payload;
  },
  [catchSingle.type]: (state, action) => {
    state.freePokemons = state.freePokemons.filter(
                pokemon => pokemon.name !== action.payload.name
              );
    state.shouldCapturedPokemonsRefetch = true;
  },
  [setSingleFree.type]: (state, action) => {
    state.capturedPokemons = state.capturedPokemons.filter(
      pokemon => pokemon.name !== action.payload.name
    );
    state.shouldFreePokemonsRefetch = true;
  },
  [setCurrentPokemon.type]: (state, action) => {
    state.currentPokemon = action.payload;
  }
});

export default pokemonsReducer;
