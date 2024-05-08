import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';

import '../Home/Home.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const darkMode = useSelector((state)=>state.theme.darkMode)
  const pokemonImg = 'https://cdn.wallpapersafari.com/56/95/vymKq2.png'
  return (
    <>
      <Navbar />
      <div className={`home ${darkMode ? 'dark' : ''}`} style={{ padding: '20px' }}>
      <center><div className={`titletext ${darkMode ? 'dark' : ''}`}>Welcome to the Pokémon App!</div><br /></center>
        <div className='hero-container' style={{ position: 'relative' }}>
       
          <img className='hero' src={pokemonImg} />
          <div className='hero-text' style={{ position: 'absolute', top: '30%', left: '35%', transform: 'translate(-50%, -50%)', textAlign: 'left', color: 'white', zIndex: '1' }}>
            <div className='text-body'>
            <p className={`text ${darkMode ? 'dark' : ''}`}>
              This is a fun and interactive application where you can explore information about various Pokémon.
              Whether you're a seasoned Pokémon Trainer or just starting your journey, our app has something for everyone!
            </p>
            <p className={`text ${darkMode ? 'dark' : ''}`}>
              Get started by browsing through the Pokédex, discovering the unique abilities, base experience, height, and weight of each Pokémon.
              You can also search for specific Pokémon or navigate through different pages to find the information you need.
            </p>
            <br />
            <p className={`text ${darkMode ? 'dark' : ''}`}>
              Ready to begin your adventure? <Link className='link' to="/pokemons"> Start exploring now!</Link>
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
