
import Axios from 'axios';
// import image from './image.png'
import 'aframe';
import 'aframe-react';
import { Entity } from 'aframe-react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
// import { AiFillRead } from 'react-icons/ai';
// import { AiFillRead } from 'react-icons/aihkjhkjhfhgf';

function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [CONTACT, setCONTACT] = useState('');
  const [MOTPASSE, setMOTPASSE] = useState('');
  const [error, setError] = useState(false);

  const inputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'CONTACT') {
      setCONTACT(value);
    } else if (name === 'MOTPASSE') {
      setMOTPASSE(value);
    }
  };

  const authentification = () => {
    if (CONTACT === '' || MOTPASSE === '') {
      // MESSAGE REMPLIRE LE
      setError(true);
    } else {
      setError(false);

      Axios.post('http://localhost:5000/login', { CONTACT, MOTPASSE })
        .then((response) => {
          if (response.data && response.data.user && response.data.user.length > 0) {
            // console.log("bla", JSON.stringify(response.data));

            const user = response.data.user[0];
            const nomUtilisateur = user.NOM;
            const prénomUtilisateur = user.PRENOM;
            const numMatricule = user.NUMMATRICULE;

            localStorage.setItem('nom', nomUtilisateur);
            localStorage.setItem('prénom', prénomUtilisateur);
            localStorage.setItem('nummatricule', numMatricule);

            let timerInterval;
            Swal.fire({
              title: 'ouverture de la page',
              html: 'Apres <b></b> seconds.',
              timer: 1000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector('b');
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft();
                }, 10);
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer');
              }
            });
            handleLogin();
            navigate('/userInterface');
            // window.location.href = './userInterface';
          }

          else {

            Swal.fire({
              icon: "error",
              title: 'contact ou mot de passe incorrect',
              html: '<img src="/logo192.png" style="width:130px;">'

            });

          }
        })
        .catch(() => {
          console.log("Une erreur s'est produite lors de la requête :", error);
        });
    }
  };
  // text: "<img src='"+image.png+"' style='width:150px;'>",
  // html: '<img src="${image}" style="width:100px;">'
  //retour a l'ecran d'accueil
  const history = useNavigate()
  const retour = () => {
    history('/')
  }

  return (
    <div className='pag'>
        <a-scene>
          <a-assets>
            <a-asset-item id="model" src="VISION.glb" > </a-asset-item>
          </a-assets>
          <Entity gltf-model="#model" />
        </a-scene>

      <div class="background-image-container"></div>
      <div className="formulair">
        <h2 className='lohany' style={{ textAlign: 'center', color: '#205375' }}>Authentification</h2>
      
        <hr style={{ color: ' #9b9b9b' }}></hr>
        <div className='vatan'>

          <div className='form' >
            <label htmlFor="" className="label">Contact</label><br />
            <input
              type="number"
              className={`input ${error && (CONTACT === '') ? 'error' : ''}`}
              name="CONTACT"
              placeholder="Contact"
              id="contact"
              value={CONTACT}
              onChange={inputChange}
            />
            {error && (CONTACT === '') && <p className="error-message">Remplir le contact</p>}
          </div>

          <div className='form'>
            <label htmlFor="" className="label">Mot de Passe</label><br />
            <input
              type="password"
              className={`input ${error && (MOTPASSE === '') ? 'error' : ''}`}
              name="MOTPASSE"
              placeholder="Mot de passe"
              value={MOTPASSE}
              onChange={inputChange}
            />
            {error && (MOTPASSE === '') && <p className="error-message">Remplir le mot de passe</p>}
          </div>


        </div>
        <br></br>
        <hr style={{ color: ' #9b9b9b' }}></hr>
        <div style={{ textAlign: 'center', margin: '10px' }}>
          <button className="button-4" style={{ marginRight: '10px' }} type="button" onClick={retour}>Retourner à la page d'accueil</button>
          <button className="button-3" type="button" onClick={authentification} >Se connecter</button>
        </div>

      </div>
    </div>




  );
}

export default Login;
