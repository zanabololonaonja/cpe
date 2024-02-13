import React, { useState } from 'react';
import logo from '../../logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const history = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleLoginClick = () => {
    history('/login');
  };
  const handlformulaire = () => {
    window.location.href = './formulaire';
  };
  const handlformulaire2 = () => {
    window.location.href = './formulaire2';
  };
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img style={{ width: '50px' }} src={logo} />
          <p className="cpe">Cours CPE</p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <div className="gpt3__navbar-links_container">
          <p><a href="#home" className="menu">Accueil</a></p>
          <p><a href="#features" className="menu">Avantages</a></p>
          <p><a href="#blog" className="menu">Historique</a></p>
          <p><a href="#wgpt3" className="menu">Services</a></p>

          <p><select className="inscrire" placeholder='gotos'  name="" id=""  >
            <option  value="">S'inscrire</option>
            <option onClick={handlformulaire} className="option" value="Troisieme">Troisieme</option>
            <option onClick={handlformulaire2} className="option" value="Terminale">Terminale</option>
          </select></p>
        </div>
        <button type="button" onClick={handleLoginClick}>Se connecter</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#205375" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#205375" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#blog" className="menu">Historique</a></p>
              <p><a href="#wgpt3" className="menu">Services</a></p>
              {/* <p><a href="#blog" className="menu">Contact</a></p> */}
              
              <p><select className="inscrire" name="" id=""  >
                <option value="">S'inscrire</option>
                <option onClick={handlformulaire} value="Troisieme">Troisieme</option>
                <option onClick={handlformulaire2} value="Terminale">Terminale</option>
              </select></p>
            </div>

            <div className="gpt3__navbar-menu_container-links-sign">
              <br />

              <button type="button" onClick={handleLoginClick}>Se connecter</button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
