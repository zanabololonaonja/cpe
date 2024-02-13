import React from 'react';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import ai from '../../logo.png';
import './accueil.css';

const handleLoginClick = () => {
  window.location.href = './login';
};
const handlformulaire = () => {
  window.location.href = './formulaire';
};
const handlformulaire2 = () => {
  window.location.href = './formulaire2';
};
const Accueil = () => (

  <div className="gpt3__header section__padding" id="home">

    <div className="gpt3__header-content">
      <h1 className="gradient__text">Club des professeurs expérimentés</h1>
      <p>Etablissement scolaire qui est dédié à préparer les étudiants de manière complète et approfondie
        pour réussir avec succès leurs examens de Certificat d’Etudes Primaires Elémentaire (CEPE) ou de
        Brevet d’Etudes du Premier Cycle (BEPC) ou de baccalauréat. </p>

      <div className="gpt3__header-content__input">
        {/* <input type="email" placeholder="Your Email Address" /> */}
        <button type="button" className='button-78' onClick={handleLoginClick}>Se connecter</button>

        {/* <select className='inscription' name="ttttt" id=""  >

          <option value="">S'inscrire</option>
          <option onClick={handlformulaire} className='option' value="Troisieme">Troisieme</option>
          <option onClick={handlformulaire2} className='option' value="Terminale">Terminale</option>

        </select> */}
      </div>

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={ai} className="moving-image" />
    </div>
  </div>
);

export default Accueil;
