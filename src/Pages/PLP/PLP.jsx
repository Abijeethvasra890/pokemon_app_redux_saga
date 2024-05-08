import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import './PLP.css'
import Navbar from '../../Components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FETCH_POKEMONS_REQUEST } from '@/redux/actions/fetchDataActions';
import InfiniteScroll from 'react-infinite-scroll-component';

//PLP - Pokemon Listing Page -> displays the fetched pokemons in Cards

//const apiURL = 'https://pokeapi.co/api/v2/pokemon/';


const PLP = () => {
  const dispatch = useDispatch();
  const [offsetval, setOffsetval] = useState(0);

  useEffect(()=>{
    dispatch(FETCH_POKEMONS_REQUEST({ apiURL: `https://pokeapi.co/api/v2/pokemon/?offset=${offsetval}&limit=20`, page: "PLP" }));
  },[offsetval])


  const darkMode = useSelector((state)=>state.theme.darkMode);
   // const {data, isLoading, error} = useQuery('pokemons', () => fetchData(apiURL));
   const data = useSelector((state) => state.fetchData.pokemons);
   const isLoading = useSelector((state) => state.fetchData.isLoading);
   const error = useSelector((state) => state.fetchData.error);
   // console.log(data);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    const fetchMoreData = () => {
      // Trigger fetching more data when reaching the end of the page
      setOffsetval(prevOffset => prevOffset + 20);
    };

    return (
      <div>
      <Navbar /> 
      <div className={`PLPtitle ${darkMode ? 'dark' : ''}`}>Pokemons List</div>
      <InfiniteScroll
        dataLength={data.length} 
        next={fetchMoreData}
        hasMore={true} 
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more pokemons to show</p>}
        className={`pokemon-grid ${darkMode ? 'dark' : ''}`}
      >
        {data?.length > 0 ? data.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} id={index + 1} />
        )) : <div>No Data</div>}
      </InfiniteScroll>
      </div>
    );

}

export default PLP