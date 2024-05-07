import { createAction } from "@reduxjs/toolkit";

export const FETCH_POKEMONS_REQUEST = createAction('FETCH_POKEMONS_REQUEST');
export const FETCH_POKEMONS_SUCCESS = createAction('FETCH_POKEMONS_SUCCESS');
export const FETCH_POKEMONS_FAILURE = createAction('FETCH_POKEMONS_FAILURE');