import { createAction } from '@reduxjs/toolkit';

export const POKEMONS = {
    default: '[Pokemons]',
    free: '[Pokemons][Free]',
    captured: '[Pokemons][Captured]'
};

export const actionTypes = {
    CATCH_SINGLE:                       `${POKEMONS.default} CATCH_SINGLE`,
    SET_SINGLE_FREE:                    `${POKEMONS.default} SET_SINGLE_FREE`,
    FETCH_FREE_POKEMONS:                `${POKEMONS.free} FETCH_FREE_POKEMONS`,
    SET_FREE_POKEMONS:                  `${POKEMONS.free} SET_FREE_POKEMONS`,
    FETCH_CAPTURED_POKEMONS:            `${POKEMONS.captured} FETCH_CAPTURED_POKEMONS`,
    SET_CAPTURED_POKEMONS:              `${POKEMONS.captured} SET_CAPTURED_POKEMONS`,
    FETCH_RANDOM_POKEMON:               `${POKEMONS.default} FETCH_RANDOM_POKEMON`,
    SET_RANDOM_POKEMON:                 `${POKEMONS.default} SET_RANDOM_POKEMON`,
    SET_CURRENT_POKEMON:                `${POKEMONS.default} SET_CURRENT_POKEMON`,
    FREE_POKEMONS_API_SUCCESS:          `${POKEMONS.free} API_SUCCESS`,
    CAPTURED_POKEMONS_API_SUCCESS:      `${POKEMONS.captured} API_SUCCESS`,
};

export const catchSingle = createAction(actionTypes.CATCH_SINGLE, ({ pokemon }) => ({
    payload: pokemon,
    meta: { feature: POKEMONS.default }
}));

export const setSingleFree = createAction(actionTypes.SET_SINGLE_FREE, ({ pokemon }) => ({
    payload: pokemon,
    meta: { feature: POKEMONS.default }
}));

export const fetchFreePokemons = createAction(actionTypes.FETCH_FREE_POKEMONS, () => ({
    payload: null,
    meta: { feature: POKEMONS.free }
}));

export const setFreePokemons = createAction(actionTypes.SET_FREE_POKEMONS, ({ pokemons }) => ({
    payload: pokemons,
    meta: { feature: POKEMONS.free }
}));

export const fetchCapturedPokemons = createAction(actionTypes.FETCH_CAPTURED_POKEMONS, () => ({
    payload: null,
    meta: { feature: POKEMONS.captured }
}));

export const setCapturedPokemons = createAction(actionTypes.SET_CAPTURED_POKEMONS, ({ pokemons }) => ({
    payload: pokemons,
    meta: { feature: POKEMONS.captured }
}));

export const fetchRandomPokemon = createAction(actionTypes.FETCH_RANDOM_POKEMON, ({ query }) => ({
    payload: query,
    meta: { feature: POKEMONS.default }
}));

export const setRandomPokemon = createAction(actionTypes.SET_RANDOM_POKEMON, ({ pokemon }) => ({
    payload: pokemon,
    meta: { feature: POKEMONS.default }
}));

export const setCurrentPokemon = createAction(actionTypes.SET_CURRENT_POKEMON, ({ pokemon }) => ({
    payload: pokemon,
    meta: { feature: POKEMONS.default }
}));
