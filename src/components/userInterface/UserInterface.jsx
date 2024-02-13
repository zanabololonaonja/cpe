import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { css } from '@emotion/react';
import { BarLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import Axios from 'axios';
import './userInterface.css';
import Navbar3 from '../navbar/Navbar3';
import S1 from './S1.jpg'
import Modal from 'react-modal';
Modal.setAppElement('#root'); // L'élément racine de votre application


function UserInterface() {
  const nom = localStorage.getItem('nom');
  const prénom = localStorage.getItem('prénom');
  const numMatricule = localStorage.getItem('nummatricule');
  const [classe, setClasse] = useState("");
  const [idclasse, setIdclasse] = useState("");
  const [numero, setNumero] = useState("");
  const [niveau, setNiveau] = useState("");
  const [ecolage, setEcolage] = useState("");
  const [annee, setAnnee] = useState("");
  const [carte, setCarte] = useState([]);
  const [motif, setMotif] = useState([]);
  const [ligne, setLigne] = useState([]);
  const [numDebit, setNumDebit] = useState([]);

  useEffect(() => {
    recevoirClasse();
    afficheCarte();
    selectMotif();
    afficheLigne();
  }, []);

  //Load classe et numero
  const recevoirClasse = () => {
    Axios.get(`http://localhost:5000/recevoirClasse/ ${numMatricule}`)
      .then((response) => {
        console.log(response.data.resp[0]);
        const valiny = response.data.resp[0];
        setClasse(valiny.LIBELLECARNET);
        setIdclasse(valiny.IDCLASSE);
        setNumero(valiny.NUMERO);
        setEcolage(valiny.ECOLAGE);
        setNiveau(valiny.IDNIVEAU);
        setAnnee(valiny.IDANNEE)
      })
  };

  //load motif
  const selectMotif = () => {
    Axios.get(`http://localhost:5000/selectMotif`)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.resp;
          setMotif(data);
        }
      })
  };

  //affiche carte ecolage
  const afficheCarte = () => {
    Axios.get(`http://localhost:5000/afficheCarte/ ${numMatricule}`)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.resp;
          // Mettre à jour l'état local avec les données des cartes récupérées
          setCarte(data);
        } else {
          console.error("Échec de la requête : Statut", response.status);
        }
      })
  }

  // Créer un objet pour mapper les CODEMOTIF aux noms de colonnes
  const columnMapping = {
    DRTI: "DROIT",
    ECO1: "OCT",
    ECO2: "NOV",
    ECO3: "DEC",
    ECO4: "JAN",
    ECO5: "FEV",
    ECO6: "MARS",
    ECO7: "AVR",
    ECO8: "MAY",
    ECO9: "JUIN",
    DRTE: "DROIT EX",
    DRTEB: "DROIT EB",
  };

  // ajout PAIEMENT
  const [IDLIGNERECU, setIDLIGNERECU] = useState('');
  const [MONTANT, setMONTANT] = useState('');
  const [paiements, setPaiements] = useState([]);

  const [nummatriculeModal, setNummatriculeModal] = useState('');
  const [montantTotal, setMontantTotal] = useState(0);

  const [selectedValue, setSelectedValue] = useState('');
  const handleSelectChange = (event) => {
    const selectedVal = event.target.value;
    setSelectedValue(selectedVal);

    // Vérifier si la valeur sélectionnée est "DRTI"
    if (selectedVal === 'DRTI') {
      // Définir le montant à 6000
      setMONTANT('20000');
    } else if (selectedVal.startsWith('ECO')) {
      setMONTANT(ecolage)
    } else if (selectedVal === 'TSHIRT') {
      setMONTANT('10000');
    } else if (selectedVal === 'DRTE') {
      if (niveau === '1') {
        setMONTANT('30000')
      } else { setMONTANT('6000') }
    } else if (selectedVal === 'DRTEB') {
      setMONTANT('5000')
    } else {
      // Réinitialiser le montant à vide ou à une autre valeur par défaut si nécessaire
      setMONTANT('');
    }
  };

  const ajouterLigne = () => {
    if (selectedValue == "" || MONTANT == "") {
      toast.info('Ajoutez d\'abord le motif ')
    } else {
      console.log(selectedValue + ' ' + idclasse + ' ' + numMatricule + ' ' + MONTANT + ' ' + numero);
      Axios.post('http://localhost:5000/ajouterLigne', {
        selectedValue,
        idclasse,
        numMatricule,
        MONTANT,
        numero
      }).then(() => {
        setSelectedValue('');
        setMONTANT('');
        afficheLigne();
      })
    }

  }

  //affiche ligne
  const afficheLigne = () => {
    Axios.get('http://localhost:5000/afficheLigne').then((response) => {
      setLigne(response.data)
    })
  }

  // Fonction pour calculer la somme des montants à partir de 'ligne'
  const calculerSommeMontants = () => {
    let somme = 0;
    if (ligne.length > 0) {
      somme = ligne.reduce((acc, item) => acc + parseFloat(item.MONTANT || 0), 0);
    }
    return somme;
  };

  // VALIDER PAYEMENT
  const [loading, setLoading] = useState(false);
  const validerCommande = () => {
    if (numDebit == "") {
      toast.error('Entrez le numéro téléphone')
    } else if (numDebit.length !== 10) {
      toast.error('Vérifiez votre numero téléphone')
    } else if (!numDebit.startsWith("034")) {
      toast.error('Seul le numero Telma est valable')
    } else {
      const montant = calculerSommeMontants();
      const client = (nom + ' ' + prénom);
      const anne = annee;
      setLoading(true); // Afficher le spinner
      Axios.post('http://localhost:5000/validerCommande', {
        montant,
        client,
        anne,
        numDebit
      }).then(() => {
        afficheLigne();
        afficheCarte();
        closeModal();
        setLoading(false);
        toast.success("Paiement avec succes")
      })
        .catch((error) => {
          console.log('Erreur lors de l\'enregistrement des paiements dans la base de données:', error);
          setLoading(false);
        });
    }

  };



  // suprimer le payement sur l'interface
  const supprligne = (TEMPIDLIGNERECU) => {
    toast.success("ligne supprimée avec succes")
    console.log(TEMPIDLIGNERECU);
    Axios.post(`http://localhost:5000/supprimerLigne/${TEMPIDLIGNERECU}`)
      .then(() => {
        afficheLigne();
      })
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    if (calculerSommeMontants() == 0) {
      toast.error('Ajoutez le motif')
    } else {
      setIsOpen(true);
    }

  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Navbar3 />

      <div className="bonjour">  <p> {nom} {prénom}<br /></p>
        <p1 className="bon"> Matricule - {numMatricule}</p1><br />
        <p1 className="bon"> Classe - {classe}</p1><br />
        <p1 className="bon"> Numero - {numero}</p1><br />
        {/* <button type="button" className="btnecolage" onClick={handleModalOpenrecu}><AiFillEye />  Consulter recu</button> */}
      </div><br />

      <div className="table-container">
        <table className="tableaffichevoloany">
          <thead>
            <tr>
              {Object.values(columnMapping).map((columnName) => (
                <th key={columnName}>
                  {columnName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.keys(columnMapping).map((columnName, index) => (
                <td key={index}>
                  {carte.find((carte) => carte.CODEMOTIF === columnName)?.MONTANT || 0}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>





      {/* ajout paiement */}
      <div className='ajoutligne'>
        <div >
          <select className="input" name="CODEMOTIF" id="CODEMOTIF" value={selectedValue} onChange={handleSelectChange}  >
            <option className="MOTIF" value="">Sélectionner un motif </option>
            {motif.map((motif) => (
              <option className="MOTIF" key={motif.CODEMOTIF} value={motif.CODEMOTIF}>
                {motif.DESIGNMOTIF}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            className="input"
            name="MONTANT"
            id="MONTANT"
            placeholder="Montant"
            value={MONTANT}
            onChange={(event) => { setMONTANT(event.target.value); }}
            disabled
          />
        </div>
        <div>
          <button type="button" className="button-3" onClick={ajouterLigne} >Ajouter</button>
        </div>
      </div>
      <div className='table-container'>
        <table className="tableaffichevoloany">
          <thead>
            <tr>
              <th>MOTIF</th>
              <th>MONTANT</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {ligne && ligne.map((item, index) => (
              <tr key={index}>
                <td>{item.DESIGNMOTIF}</td>
                <td>{item.MONTANT}</td>
                <td>
                  <button type="button" className="ANNULER" onClick={() => supprligne(item.TEMPIDLIGNERECU)}><AiOutlineDelete />   Suprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <div className="ajoutligne">
        <div className='card'>
          <p className="total">TOTAL: <p1 className='vola'>{calculerSommeMontants()}</p1> <sup>Ar</sup>  </p>
        </div>

        <div>
          <button type="button" className="button-78" onClick={openModal} >Payer</button>

        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="modal"

        >
           <img src={S1} className="image"/>
          <h2>Entrez le numero Mvola pour débiter la somme de {calculerSommeMontants()} Ar </h2>
          <br />
          <input
            type='number'
            className="input-modal"
            name="MONTANT"
            id="MONTANT"
            placeholder="Saisir le numero"
            onChange={(event) => { setNumDebit(event.target.value); }}

          />

          <button onClick={validerCommande}>Valider</button>
          
          <div style={{ position: 'relative', marginTop: '0px' }}>
            {loading && (
              <span style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 1, fontSize:"15px" }}>
                Transaction en cours...
                <div style={{ marginLeft: "20px" }}>
                  <BarLoader loading={loading} color="#205375" css={css`height: 6px;`}  size={150}/>
                </div>

              </span>
            )}

          </div>

        </Modal>
      </div>
    </div>
  );
}
export default UserInterface;