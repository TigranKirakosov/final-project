import { POKEMONS, setFreePokemons, fetchFreePokemons, fetchCapturedPokemons, setCapturedPokemons } from "./new.actions";
import { API_SUCCESS, API_ERROR } from "../api/api.actions";
import { freePokemonsApiRequest, capturedPokemonsApiRequest } from "App/api/firebase/pokemons/pokemons.api";

export const pokemonsMiddleware = ({ dispatch }) => next => action => {
    next(action);

    switch (action.type) {
        case fetchFreePokemons.type:
            freePokemonsApiRequest(dispatch, action.meta.feature);
            break;
        case `${POKEMONS.free} ${API_SUCCESS}`:
            next([
                setFreePokemons({ pokemons: action.payload })
            ]);
            break;
        case `${POKEMONS.free} ${API_ERROR}`:
            console.error(action.payload);
            break;
        case fetchCapturedPokemons.type:
            capturedPokemonsApiRequest(dispatch, action.meta.feature);
            break;
        case `${POKEMONS.captured} ${API_SUCCESS}`:
            next([
                setCapturedPokemons({ pokemons: action.payload })
            ]);
            break;
        case `${POKEMONS.captured} ${API_ERROR}`:
            console.error(action.payload);
        default:
            break;
    }
};
