import React, { useEffect, useRef } from 'react';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import './PLP.css';
import Navbar from '../../Components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_POKEMONS_REQUEST } from '@/redux/actions/fetchDataActions';

const PLP = () => {
  const dispatch = useDispatch();
  const [offsetval, setOffsetval] = React.useState(0);
  const pokemonListRef = useRef(null);
  const prevScrollY = useRef(0);

  const darkMode = useSelector((state) => state.theme.darkMode);
  const data = useSelector((state) => state.fetchData.pokemons);
  const isLoading = useSelector((state) => state.fetchData.isLoading);
  const error = useSelector((state) => state.fetchData.error);

  const fetchMoreData = () => {
    // Save current scroll position
    prevScrollY.current = pokemonListRef.current.scrollTop;
    // Fetch more data
    setOffsetval(prevOffset => prevOffset + 20);
  };

  useEffect(() => {
    dispatch(FETCH_POKEMONS_REQUEST({ apiURL: `https://pokeapi.co/api/v2/pokemon/?offset=${offsetval}&limit=20`, page: "PLP" }));
  }, [offsetval, dispatch]);

  const handleScroll = () => {
    if (pokemonListRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = pokemonListRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        fetchMoreData();
      }
    }
  };

  useEffect(() => {
    if (pokemonListRef.current) {
      pokemonListRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (pokemonListRef.current) {
        pokemonListRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    // Restore previous scroll position after new data is loaded
    if (pokemonListRef.current) {
      pokemonListRef.current.scrollTo(0, prevScrollY.current);
    }
  }, [data]);

 // if (isLoading) return <div>Loading...</div>;
 // if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Navbar />
      <div className={`PLPtitle ${darkMode ? 'dark' : ''}`}>Pokemons List</div>
      <div ref={pokemonListRef} className={`pokemon-grid ${darkMode ? 'dark' : ''}`} style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
        {data?.length > 0 ? data.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} id={index + 1} isLoading={isLoading}/>
        )) : 
        <div >
          Loading ....
        </div>}
      </div>
    </div>
  );
};

export default PLP;
