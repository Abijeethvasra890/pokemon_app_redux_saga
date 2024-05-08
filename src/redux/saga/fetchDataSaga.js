import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POKEMONS_FAILURE, FETCH_POKEMONS_REQUEST, FETCH_POKEMONS_SUCCESS } from '../../redux/actions/fetchDataActions';

//worker saga - will be triggered from watcher
function* fetchData(action) {
    const { apiURL, page } = action.payload;
    try {
       // console.log(apiURL);
        const response = yield call(axios.get, apiURL);
        yield put(FETCH_POKEMONS_SUCCESS({ data: response.data, page }));
    } catch (error) {
        yield put(FETCH_POKEMONS_FAILURE(error));
    }
}

//watcher saga - will start watching once root has triggered
export function* watchFetchPokemonData() {
    yield takeLatest(FETCH_POKEMONS_REQUEST, fetchData);
}
