import { all } from "redux-saga/effects";
import { watchFetchPokemonData } from "./fetchDataSaga";

//root saga
const rootSaga = function* (){
    yield all([watchFetchPokemonData()]);
};

export default rootSaga;