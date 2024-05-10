import React,{ useContext, useState }  from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../ui/button'
import '../Navbar/Navbar.css'
import { Toggle } from '../Toggle/Toggle'

import NameModal from '../NameModal/NameModal'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/slices/auth/authSlice'
import { Switch } from '../ui/switch'


const Navbar = () => {
  //const { isAuthenticated, userName, logout } = useContext(AuthContext);
 // const { darkMode } = useContext(themeContext);
  const dispatch = useDispatch();
  const darkMode = useSelector((state)=>state.theme.darkMode);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userName = useSelector((state) => state.auth.userName);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>  
        <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
          <div className="title">Pokémon App</div>
          <div className='usertext'>{isAuthenticated ? `Hi, ${userName}` : <NameModal />}</div>
          <div className='buttonsRight'>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pokemons">Pokemon List</NavLink>
                  </li>
                  {isAuthenticated?
                    <Button onClick={handleLogout}>Logout</Button>:""
                  }
                </ul>
               
                {/*<Switch />*/}
                <Toggle className="toggle"/>
          </div>
        </nav>
    </div>
  )
}

export default Navbar