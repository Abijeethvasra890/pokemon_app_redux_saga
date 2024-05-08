import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../slices/theme/themeSlice'
import authReducer from '../slices/auth/authSlice'
import fetchDataReducer from "../slices/fetchData/fetchDataSlice"
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = configureStore({
    reducer:{
        theme: themeReducer,
        auth: authReducer,
        fetchData: fetchDataReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})

sagaMiddleware.run(rootSaga);