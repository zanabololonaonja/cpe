import React, { useState } from 'react';
import logo from '../../logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
  const history = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleLoginClick = () => {
    history('/login');
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">         
          <img style={{width:'50px'}} src={logo} />
          <p className="cpe">Cours CPE</p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      
        <button type="button" onClick={handleLoginClick}>Se connecter</button>
        
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#205375" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#205375" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            
            <div className="gpt3__navbar-menu_container-links-sign">
              {/* <Link to="/login">
                <button type="button">Se connecter</button>
              </Link> */}
              <button type="button" onClick={handleLoginClick}>Se connecter</button>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
