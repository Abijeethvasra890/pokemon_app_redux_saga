import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../PokemonCard/PokemonCard.css'
import { getImageURL } from '../../Utils/pokemonUtils';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

import { useSelector } from 'react-redux';

//Pokemon Card -> Displays the data of each pokemon in the form of Cards

const PokemonCard = ({pokemon, id, isLoading}) => {
  const getImage = (id) => {
    const paddedId = `00000${id}`.slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
  };
  
  const imageURL = getImage(id);
  //const {darkMode} = useContext(ThemeContext);
  const darkMode = useSelector((state)=>state.theme.darkMode);

  // Render skeleton if isLoading is true
  if (isLoading) {
    return (
      <div className={`pokemon-card-container ${darkMode ? 'dark' : ''} skeleton`}>
        <Card className="m-1">
          <div className="skeleton-title"></div>
          <CardContent>
            <div className='skeleton-image size-56'></div>
          </CardContent>
          <CardFooter className="skeleton-button-container">
            <div className="skeleton-button"></div>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <Link to={`/pokemons/${id}`}>
      <div className={`pokemon-card-container ${darkMode ? 'dark' : ''}`}>
        <Card className="m-1">
          <CardHeader>
            <CardTitle>{pokemon.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img className='size-56' src={imageURL} alt="Card image cap" 
              style={{ filter: `filter: drop-shadow(30px 10px 4px #4444dd);` }}
            />
          </CardContent>
          <CardFooter >
            <Button className="w-52" variant="default">Details</Button>
          </CardFooter>
        </Card>
      </div>
    </Link>
  );
}

export default PokemonCard;
