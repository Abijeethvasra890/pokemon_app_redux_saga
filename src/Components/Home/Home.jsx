import React, { useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import '../Home/Home.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const pokemonImg = 'https://cdn.wallpapersafari.com/56/95/vymKq2.png';
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    // Set imageLoaded to true when the image has finished loading
    setImageLoaded(true);
  };

  return (
    <>
      <Navbar />
      <div className={`home ${darkMode ? 'dark' : ''}`} style={{ padding: '20px' }}>
        <center>
          <div className={`titletext ${darkMode ? 'dark' : ''}`}>Welcome to the Pokémon App!</div>
          <br />
        </center>
        <div className='hero-container' style={{ position: 'relative' }}>
          {/* Lazy loading image with orange color placeholder */}
          <img
            className={`hero ${!imageLoaded ? 'lazy-loading' : ''}`}
            src={pokemonImg}
            onLoad={handleImageLoad}
            alt='Pokemon'
          />
          <div className='hero-text'>
            <div className='text-body'>
              <p className={`text ${darkMode ? 'dark' : ''}`}>
                Welcome to our Pokémon app! Discover a world of Pokémon adventures with us.
                Explore the Pokédex, learn about each Pokémon's unique abilities, and dive into a treasure trove of information.
                Whether you're a seasoned Trainer or just starting out, there's something exciting waiting for you!
              </p>
              <br />
              <p className={`text ${darkMode ? 'dark' : ''}`}>
                Ready to begin your adventure? <Link className='link' to='/pokemons'>Start exploring now!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
