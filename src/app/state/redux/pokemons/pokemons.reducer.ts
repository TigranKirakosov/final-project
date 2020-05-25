import { createReducer } from '@reduxjs/toolkit';
import { fetchFreePokemonsStart, fetchFreePokemonsSuccess, fetchCapturedPokemonsStart, fetchCapturedPokemonsSuccess, fetchFreePokemonsFailure, fetchCapturedPokemonsFailure, fetchRandomPokemonAsync, fetchRandomPokemon, catchPokemon, setPokemonFree, setCurrentPokemon } from './pokemons.actions';

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
  [fetchFreePokemonsStart.type]: state => {
    state.isFetching = true;
  },
  [fetchCapturedPokemonsStart.type]: state => {
    state.isFetching = true;
  },
  [fetchFreePokemonsSuccess.type]: (state, action) => {
    state.isFetching = false;
    state.shouldFreePokemonsRefetch = false;
    state.freePokemons = action.payload.sort((a, b) => a.photoId - b.photoId);
    state.errorMessage = null;
  },
  [fetchCapturedPokemonsSuccess.type]: (state, action) => {
    state.isFetching = false;
    state.shouldCapturedPokemonsRefetch = false;
    state.capturedPokemons = action.payload.sort((a, b) => a.photoId - b.photoId);
    state.errorMessage = null;
  },
  [fetchFreePokemonsFailure.type]: (state, action) => {
    state.isFetching = false;
    state.errorMessage = action.payload;
  },
  [fetchCapturedPokemonsFailure.type]: (state, action) => {
    state.isFetching = false;
    state.errorMessage = action.payload;
  },
  [fetchRandomPokemonAsync.type]: state => {
    state.isFetching = true;
  },
  [fetchRandomPokemon.type]: (state, action) => {
    state.isFetching = false;
    state.randomPokemon = action.payload;
  },
  [catchPokemon.type]: (state, action) => {
    state.freePokemons = state.freePokemons.filter(
                pokemon => pokemon.name !== action.payload.name
              );
    state.shouldCapturedPokemonsRefetch = true;
  },
  [setPokemonFree.type]: (state, action) => {
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
