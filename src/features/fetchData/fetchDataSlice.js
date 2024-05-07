
import { FETCH_POKEMONS_FAILURE, FETCH_POKEMONS_REQUEST, FETCH_POKEMONS_SUCCESS } from "@/app/actions/fetchDataActions";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*export const fetchData = createAsyncThunk("data/fetch", async ({ apiURL, page }) => {
    const response = await axios.get(apiURL);
    return { data: response.data, page };
});*/

const fetchDataSlice = createSlice({
    name: "data",
    initialState: {
        pokemons: [],
        pokemonData: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FETCH_POKEMONS_REQUEST, (state) => {
            state.isLoading = true;
        });
        builder.addCase(FETCH_POKEMONS_SUCCESS, (state, action) => {
            state.isLoading = false;
            if (action.payload.page === "PLP") {
                state.pokemons = action.payload.data;
            } else {
                state.pokemonData = action.payload.data;
            }
        });
        builder.addCase(FETCH_POKEMONS_FAILURE, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

export default fetchDataSlice.reducer;
