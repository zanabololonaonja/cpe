import React, { useState } from 'react';
import logo from '../../logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { AiOutlineDelete, AiOutlinePoweroff, AiFillEye } from 'react-icons/ai';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Navbar3 = () => {
    
    const [toggleMenu, setToggleMenu] = useState(false);

    const history = useNavigate();

    const gotoprofile = () => {
        history('/renseignement')
    }

    const gotorenseignement = () => {
        history('/userInterface')
    }

    const gotoHistorique = () => {
        history('/historique')
    }
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const handleLoginClick = () => {
        // Effectuez les actions nécessaires pour se déconnecter, par exemple réinitialiser les valeurs dans le local storage, etc.
        //   localStorage.clear();
        setIsLoggedIn(false);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger',
            },
            buttonsStyling: true,

        });

        swalWithBootstrapButtons.fire({
            text: 'souhaitez-vous vraiment vous déconnecter?',
            icon: 'warning',
            cancelButtonText: 'NON ',
            confirmButtonText: 'OUI ',
          
            reverseButtons: false,
        }).then((result) => {
            if (result.isConfirmed) {
                    localStorage.clear();
        history('/',  { replace: true });
            }
        });
    
    };
    const handleProfiClick = () => {
        window.location.href = './profile';
    };
    // const handleLoginClick = () => {
    //     localStorage.clear();
    //     history('/',  { replace: true });
    // };

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
                    <p className="menu" onClick={gotoHistorique}>Historique</p>
                    <p className="menu" onClick={gotorenseignement}>Accueil</p>
                    <p className="menu" onClick={gotoprofile}>Profile</p>
                </div>
                <button type="button" onClick={handleLoginClick} style={{ height: '35px', width: '35px', padding: '7px' }}><AiOutlinePoweroff /></button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#205375" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#205375" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <p className="menu" onClick={gotoHistorique}>Historique</p>
                            <p className="menu" onClick={gotorenseignement}>Accueil</p>
                            <p className="menu" onClick={gotoprofile}>Profile</p>

                            <button type="button" onClick={handleLoginClick} style={{ height: '35px', width: '35px', padding: '7px' }}><AiOutlinePoweroff /></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar3;
