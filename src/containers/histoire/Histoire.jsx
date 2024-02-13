import React from 'react';
import doct from './doct.jpg'
import S from './S.jpg'      
import './histoire.css';
import { AiFillTrophy, AiFillCalendar, AiFillEye, AiFillHome } from 'react-icons/ai';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div > <img src={doct} onDragStart={handleDragStart}  className="animation" role="presentation" /></div>,
  <div > <img src={doct} onDragStart={handleDragStart}  className="animation" role="presentation" /></div>,
  <div ><img src={S} onDragStart={handleDragStart}  className="animation" role="presentation" /></div>,
  <div ><img src={S} onDragStart={handleDragStart}  className="animation"role="presentation" /></div>,
  <div > <img src={doct} onDragStart={handleDragStart}  className="animation" role="presentation" /></div>,
  <div > <img src={doct} onDragStart={handleDragStart}  className="animation" role="presentation" /></div>,
  <div ><img src={S} onDragStart={handleDragStart}  className="animation" role="presentation" /></div>,
  <div ><img src={S} onDragStart={handleDragStart}  className="animation"role="presentation" /></div>,
];

const Histoire = () => (

  <div className="gp" id='blog'>
    <div className="gpt3__header-content">
      <h2 className="gradient__text2">Historiques</h2><br /><br />
      <div >
        <p style={{ fontSize: "16px", wordSpacing: "4px", lineHeight: "25px" }}><AiFillCalendar  />   Il est créé le 03 Décembre 1997 à Antananarivo sous la direction de <strong> RATEFIARIVONY Jacques Audace</strong>. A cette époque, il n’y avait que seulement 20 étudiants et 9 personnels. Durant l’année scolaire 2022-2023, le nombre des élèves inscrits dans tous Madagascar comptait environ 10.000 et le personnel 400.
          <br></br> <br /><AiFillEye />  Le COURS CPE se distingue par des résultats exceptionnels obtenus par les étudiants avec un taux de réussite élevé aux examens CEPE, BEPC et baccalauréat.
          <br></br> <br /> <AiFillTrophy/>A partir de l’année 2007, issu de la célébration du 10ème anniversaire, le LYCEE PRIVE CPE est né à Behoririka et maintenant il existe cinq (5) LYCEE PRIVE CPE : Behoririka, Ankatso, Tsiroanomandidy, Tuléar et Fianarantsoa.
          <br></br> <br /> <AiFillHome /> Son siège central est à Antananarivo au lot III M 33 K Andrefan’Ambohijanahary. Il est répandu dans toute l’île : Antananarivo (Andrefan’Ambohijanahary, Behoririka, Andoharanofotsy, Ankatso, Nanisana, Itaosy, Ampitatafika), Antsirabe, Tsiroanomandidy, Toamasina, Fenerive Est, Majunga, Maevatanana, Diégo, Fianarantsoa, Ambalavao, Ambositra, Manakara, Farafangana, Tuléar, Fort Dauphin, Morondava.
          </p>
      </div>
    </div>   
    <div className="sarisari">
        <AliceCarousel
          items={items}
          autoPlay
          autoPlayInterval={1000} // intervalle de 3 secondes
          // buttonsDisabled={false} // pour désactiver les flèches de navigation
          infinite
        />
      </div>
      {/* <AliceCarousel autoPlayInterval={3000} items={items} autoPlay   buttonsDisabled={true}  mouseTracking items={items} /> */}
    </div>


);

export default Histoire;

