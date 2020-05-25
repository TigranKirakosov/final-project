import { createAction } from '@reduxjs/toolkit';
import actionTypes from 'App/state/redux/pokemons/pokemons.action-types';

export const fetchFreePokemonsStart = createAction(actionTypes.FETCH_FREE_POKEMONS_START);

export const fetchFreePokemonsSuccess = createAction(actionTypes.FETCH_FREE_POKEMONS_SUCCESS, freePokemonsMap => ({
  payload: freePokemonsMap
}));

export const fetchFreePokemonsFailure = createAction(actionTypes.FETCH_FREE_POKEMONS_FAILURE, errorMessage => ({
  payload: errorMessage
}));

export const fetchCapturedPokemonsStart = createAction(actionTypes.FETCH_CAPTURED_POKEMONS_START);

export const fetchCapturedPokemonsSuccess = createAction(actionTypes.FETCH_CAPTURED_POKEMONS_SUCCESS, capturedPokemonsMap => ({
  payload: capturedPokemonsMap
}));

export const fetchCapturedPokemonsFailure = createAction(actionTypes.FETCH_CAPTURED_POKEMONS_FAILURE, errorMessage => ({
  payload: errorMessage
}));

export const fetchRandomPokemonAsync = createAction(actionTypes.FETCH_RANDOM_POKEMON_ASYNC);

export const fetchRandomPokemon = createAction(actionTypes.FETCH_RANDOM_POKEMON, payload => ({
  payload
}));

export const catchPokemonAsync = createAction(actionTypes.CATCH_POKEMON_ASYNC, pokemon => ({
  payload: pokemon
}));

export const catchPokemon = createAction(actionTypes.CATCH_POKEMON, pokemon => ({
  payload: pokemon
}));

export const setPokemonFreeAsync = createAction(actionTypes.SET_POKEMON_FREE_ASYNC, pokemon => ({
  payload: pokemon
}));

export const setPokemonFree = createAction(actionTypes.SET_POKEMON_FREE, pokemon => ({
  payload: pokemon
}));

export const setCurrentPokemon = createAction(actionTypes.SET_CURRENT_POKEMON, pokemon => ({
  payload: pokemon
}));
