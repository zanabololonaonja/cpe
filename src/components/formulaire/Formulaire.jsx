import React, { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import Navbar2 from '../navbar/Navbar2';
import { toast } from 'react-toastify';
import Axios from 'axios';
import Swal from 'sweetalert2';
// import { toast } from 'react-toastify';
import './Formulaire.css';
import './Input.css';
import { useNavigate } from 'react-router-dom'

function App() {
  useEffect(() => {
    selectclasse()
  }, [])
  const [NOM, setNOM] = useState('');
  const [PRENOM, setPRENOM] = useState('');
  const [DATENAISSANCE, setDATENAISSANCE] = useState('');
  const [ADRESSEELEVE, setADRESSEELEVE] = useState('');
  const [NIVEAUETUDE, setNIVEAUETUDE] = useState('');
  const [CONTACT, setCONTACT] = useState('');
  const [LIEUNAISSANCE, setLIEUNAISSANCE] = useState('');
  const [MOTPASSE, setMOTPASSE] = useState('');
  const [SEXE, setSEXE] = useState('');
  const [selectedSexe, setSelectedSexe] = useState('');
  const [selectedClasse, setSelectedClasse] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);

  const handlePasswordConfirmation = (event) => {
    const confirmation = event.target.value;
    setPasswordConfirmation(confirmation);
    setPasswordMatch(MOTPASSE === confirmation);
  };

  const history = useNavigate()
  const retour = () => {
    history('/')
  }

  const [dataclasse, setDataclasse] = useState([]);
  const selectclasse = async () => {
    const result = await Axios.get('http://localhost:5000/selectclasse3eme');
    if (result.status === 200) {
      setDataclasse(result.data)
      console.log(result.data);
    }
  }


  const addUtilisateur = () => {
    const donnee = `Nom:${NOM}\nPRENOM:${PRENOM}\nDate:${DATENAISSANCE}\nLieu:${LIEUNAISSANCE}\nAdresse:${ADRESSEELEVE}\nContact:${CONTACT}\nsexe:${SEXE}\nmotpass:${MOTPASSE}\nclasse:${selectedClasse}`;
    // alert(donnee);
    if (NOM === ('') || PRENOM === ('') || DATENAISSANCE === ('') || ADRESSEELEVE === ('') || CONTACT === ('') || MOTPASSE === ('') || SEXE === ('')) {   
      toast.info('Tout les champs sont obligatoire')
    } else if (MOTPASSE !== passwordConfirmation) {
      toast.error(' Vérifier votre mot de passe')
    }
    else 
    {
      Axios.post('http://localhost:5000/adduser', {
        NOM,
        PRENOM,
        DATENAISSANCE,
        LIEUNAISSANCE,
        NIVEAUETUDE: '2',
        ADRESSEELEVE,
        NIVEAUETUDE,
        CONTACT,
        MOTPASSE,
        SEXE,
        IDCLASSE: selectedClasse
      }).then(() => {
        Swal.fire({
          title: 'Vous êtes inscrit',
          text: 'On vous recommande de se connecter',
          width: 400,
          padding: '3em',
          color: '#716add',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `,
        });
        setNOM('');
        setPRENOM('');
        setDATENAISSANCE('');
        setADRESSEELEVE('');
        setLIEUNAISSANCE('');
        setNIVEAUETUDE('');
        setCONTACT('');
        setMOTPASSE('');
        setSEXE('');
        setSelectedSexe('');
        setSelectedClasse('');
        history('/')
      });
    }
  };

  const handleRadioChange = ({ target: { value } }) => {
    setSEXE(value);
    setSelectedSexe(value);
  };
  // DECONNEXION
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogout = () => {
    // Effectuez les actions nécessaires pour se déconnecter, par exemple réinitialiser les valeurs dans le local storage, etc.
    localStorage.clear();
    setIsLoggedIn(false);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        );
      }
    });
    window.location.href = '/';
  };
  return (
    <div >
      <Navbar2 />
      <div className='page'>
   
        <div className="formulaire">
          <h2 className='lohany' style={{ textAlign: 'center', color: '#205375' }}>Inscription niveau troisieme</h2>
          <hr style={{ color: ' #9b9b9b' }}></hr>
          <div className='vatany'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Entrez votre nom" name="name" id='name' onChange={(event) => { setNOM(event.target.value); }} required />
                <label for="name" class="form__label">Nom</label>
              </div>
              <div style={{ margin: '0 10px' }}></div>

              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Entrez votre nom" name="prenom" id='prenom' onChange={(event) => { setPRENOM(event.target.value); }} required />
                <label for="prenom" class="form__label">Prénom</label>
              </div>
            </div><br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div class="form__group field">
                <input type="date" class="form__field" placeholder="Entrez votre nom" name="name" id='name' onChange={(event) => { setDATENAISSANCE(event.target.value); }} required />
                <label for="name" class="form__label">Date de naissance</label>
              </div>
              <div style={{ margin: '0 10px' }}></div>

              <div class="form__group field">
                <input type="input" class="form__field" placeholder="lieu" name="lieu" id='lieu' onChange={(event) => { setLIEUNAISSANCE(event.target.value); }} required />
                <label for="lieu" class="form__label">Lieu de naissance</label>
              </div>
            </div><br />




            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Entrez votre nom" name="contact" id='contact' onChange={(event) => { setCONTACT(event.target.value); }} required />
                <label for="contact" class="form__label">Contact</label>
              </div>
              <div style={{ margin: '0 10px' }}></div>

              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Adresse" name="adresse" id='adresse' onChange={(event) => { setADRESSEELEVE(event.target.value); }} required />
                <label for="adresse" class="form__label">Adresse</label>
              </div>
            </div><br />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Entrez votre nom" name="motdepasse" id='motdepasse' onChange={(event) => { setMOTPASSE(event.target.value); }} />
                <label for="motdepasse" class="form__label">Mot de passe</label>
              </div>
              <div style={{ margin: '0 10px' }}></div>

              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Adresse" name="confirmation" id='confirmation' onChange={(event) => handlePasswordConfirmation(event)} />
                <label for="confirmation" class="form__label">Confirmer mot de passe</label>
                <div style={{ textAlign: 'right', fontSize: '30px' }}>
                  {/* Conditional rendering for the icon */}
                  {passwordMatch ? (
                    <AiOutlineCheckCircle style={{ color: 'green', marginLeft: '5px' }} />
                  ) : (
                    <AiOutlineCloseCircle style={{ color: 'white', marginLeft: '5px' }} />
                  )}
                </div>
              </div><br />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* <div class="form__group field">
                <h3 style={{ textAlign: 'center' }} >Sexe</h3>
              </div> */}
              <div class="form__group field" style={{ textAlign: 'left' }}>
                <input type="radio" id="garcon" class="form__field" value="G" name='masculin' className="g" checked={selectedSexe === 'G'} onChange={handleRadioChange} />
                <label for="masculin" >  Masculin</label>
                <input type="radio" style={{ marginLeft: '20px' }} class="form__field" id="fille" value="F" className="f" name='feminin' checked={selectedSexe === 'F'} onChange={handleRadioChange} />
                <label for="feminin" >  Féminin</label>
              </div>

              <div class="form__group field" >
                <select className="form__field" placeholder="Entrez votre nom" name="classe" id='classe' value={selectedClasse}
                  onChange={(event) => setSelectedClasse(event.target.value)}>
                  <option value="">Sélectionnez une classe</option>
                  {dataclasse.map((classe, index) => (
                    <option key={index} value={classe.IDCLASSE}>{classe.LIBELLECARNET}</option>
                  ))}
                </select>

                <label for="classe" class="form__label">Classe</label>
              </div>

            </div>
          </div>
          <div style={{ textAlign: 'right', margin: '10px' }}>
            <button className="button-4" style={{ marginRight: '10px' }} type="button" onClick={retour}>Annuler</button>
            <button className="button-3" type="button" onClick={addUtilisateur}>Valider</button>
          </div>

        </div>
      </div>
    </div>

  );
}

export default App;
