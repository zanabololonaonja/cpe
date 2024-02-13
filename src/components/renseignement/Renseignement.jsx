import React, { useEffect, useState } from 'react';
import Navbar3 from '../navbar/Navbar3';
import Axios from 'axios';

import './Renseignement.css';
import './Input.css';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


function App() {
  const NUMMATRICULE = localStorage.getItem('nummatricule');
  useEffect(() => {
    selectEtudiant()
    console.log(NUMMATRICULE);
  }, [])
  const [NOM, setNOM] = useState('');
  const [PRENOM, setPRENOM] = useState('');
  const [DATENAISSANCE, setDATENAISSANCE] = useState('');
  const [ADRESSEELEVE, setADRESSEELEVE] = useState('');
  const [CONTACT, setCONTACT] = useState('');
  const [LIEUNAISSANCE, setLIEUNAISSANCE] = useState('');
  const [NOMPERE, setNOMPERE] = useState('');
  const [PREOFESSIONPERE, setPROFESSIONPERE] = useState('');
  const [NOMMERE, setNOMMERE] = useState('');
  const [PROFESSIONMERE, setPROFESSIONMERE] = useState('');
  const [NOMTUTEUR, setNOMTUTEUR] = useState('');
  const [PROFESSIONTUTEUR, setPROFESSIONTUTEUR] = useState('');



  // Fonction pour formater une date au format "dd/mm/aaaa"
  const formatDateString = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    // Ajouter un zéro devant le jour ou le mois si nécessaire pour le format "dd/mm/aaaa"
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  };

  const formattedDate = formatDateString(DATENAISSANCE)



  const history = useNavigate()
  const retour = () => {
    history('/userInterface')
  }


  const selectEtudiant = async () => {
    await Axios.get(`http://localhost:5000/selectEtudiant/${NUMMATRICULE}`).then((response) => {
      const data = response.data.resp[0]
      setNOM(data.NOM);
      setPRENOM(data.PRENOM);
      setDATENAISSANCE(data.DATENAISSANCE);
      setLIEUNAISSANCE(data.LIEUNAISSANCE);
      setCONTACT(data.CONTACT);
      setADRESSEELEVE(data.ADRESSEELEVE);
      setNOMPERE(data.NOMPERE);
      setPROFESSIONPERE(data.PROFESSIONPERE);
      setNOMMERE(data.NOMMERE);
      setPROFESSIONMERE(data.PROFESSIONMERE);
      setNOMTUTEUR(data.NOMTUTEUR);
      setPROFESSIONTUTEUR(data.PROFESSIONTUTEUR);

    });
  }


  const addUtilisateur = () => {
    const donnee = `Nom:${NOM}\nPRENOM:${PRENOM}\nLieu:${LIEUNAISSANCE}\nAdresse:${ADRESSEELEVE}\nContact:${CONTACT}\nNOMPERE:${NOMPERE}\nprofession:${PREOFESSIONPERE}\nNOMMERE:${NOMMERE}\nPROFESSION:${PROFESSIONMERE}\nNOMTUTEUR:${NOMTUTEUR}\nPROFESSION:${PROFESSIONTUTEUR}`;
    // alert(donnee);
   

    Axios.post(`http://localhost:5000/updateUser/${NUMMATRICULE}`, {
      NOM,
      PRENOM, 
      LIEUNAISSANCE,
      ADRESSEELEVE,
      CONTACT,
      NOMPERE,
      PREOFESSIONPERE,
      NOMMERE,
      PROFESSIONMERE,
      NOMTUTEUR,
      PROFESSIONTUTEUR,
    }).then(() => {
   toast.success("Modification éfféctuée")
    selectEtudiant();
    
    });
    
  };


  return (
    <div>
      <Navbar3 />
      <div className='page'>

        <div className="formulaire">
          <h2 className='lohany' style={{ textAlign: 'center', color: '#205375' }}>A propos</h2>
          <hr style={{ color: ' #9b9b9b' }}></hr>
          <div className='vatany'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Entrez votre nom" name="name" id='name' value={NOM} onChange={(event) => { setNOM(event.target.value); }} />
                <label for="name" class="form__label">Nom</label>
              </div>
              <div style={{ margin: '0 10px' }}></div>

              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Entrez votre nom" name="prenom" id='prenom' value={PRENOM} onChange={(event) => { setPRENOM(event.target.value); }} />
                <label for="prenom" class="form__label">Prénom</label>
              </div>
            </div><br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div class="form__group field">
                <input type="text" class="form__field" placeholder="Entrez votre nom" name="name" id='name' value={formattedDate} onChange={(event) => { setDATENAISSANCE(event.target.value); }} disabled />
                <label for="name" class="form__label">Date de naissance</label>
              </div>
              <div style={{ margin: '0 10px' }}></div>

              <div class="form__group field">
                <input type="input" class="form__field" placeholder="lieu" name="lieu" id='lieu' value={LIEUNAISSANCE} onChange={(event) => { setLIEUNAISSANCE(event.target.value); }} required />
                <label for="lieu" class="form__label">Lieu de naissance</label>
              </div>
            </div><br />


            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Entrez votre nom" name="contact" id='contact' value={CONTACT} onChange={(event) => { setCONTACT(event.target.value); }} required />
                <label for="contact" class="form__label">Contact</label>
              </div>
              <div style={{ margin: '0 10px' }}></div>

              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Adresse" name="adresse" id='adresse' value={ADRESSEELEVE} onChange={(event) => { setADRESSEELEVE(event.target.value); }} required />
                <label for="adresse" class="form__label">Adresse</label>
              </div>
            </div><br />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Entrez votre nom" name="nompere" id='nompere' value={NOMPERE} onChange={(event) => { setNOMPERE(event.target.value); }} />
                <label for="nompere" class="form__label">Nom du père</label>
              </div>
              <div style={{ margin: '0 10px' }}></div>

              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Adresse" name="professionpere" id='professionpere' value={PREOFESSIONPERE} onChange={(event) => { setPROFESSIONPERE(event.target.value); }} />
                <label for="professionpere" class="form__label">Profession du père</label>
                <div style={{ textAlign: 'right', fontSize: '30px' }}>
                </div>
              </div><br />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Entrez votre nom" name="nommere" id='nommere' value={NOMMERE} onChange={(event) => { setNOMMERE(event.target.value); }} />
                <label for="nommere" class="form__label">Nom de la Mere</label>
              </div>
              <div style={{ margin: '0 10px' }}></div>

              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Adresse" name="professionmere" id='professionmere' value={PROFESSIONMERE} onChange={(event) => { setPROFESSIONMERE(event.target.value); }} />
                <label for="professionmere" class="form__label">Profession de la Mere</label>
                <div style={{ textAlign: 'right', fontSize: '30px' }}>
                </div>
              </div><br />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Entrez votre nom" name="nomtuteur" id='nomtuteur' value={NOMTUTEUR} onChange={(event) => { setNOMTUTEUR(event.target.value); }} />
                <label for="nomtuteur" class="form__label">Nom du tuteur</label>
              </div>
              <div style={{ margin: '0 10px' }}></div>

              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Adresse" name="professiontuteur" id='professiontuteur' value={PROFESSIONTUTEUR} onChange={(event) => { setPROFESSIONTUTEUR(event.target.value); }} />
                <label for="professiontuteur" class="form__label">Profession du tuteur</label>
                <div style={{ textAlign: 'right', fontSize: '30px' }}>
                </div>
              </div><br />
            </div>


          </div>
          <div style={{ textAlign: 'right', margin: '10px' }}>
            <button className="button-4" style={{ marginRight: '10px' }} type="button" onClick={retour}>retour</button>
            <button className="button-3" type="button" onClick={addUtilisateur}>Modifier</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
