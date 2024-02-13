import React from 'react';
import {useNavigate} from 'react-router-dom'
import Avantage from '../../components/avantage/Avantage';
import Article from '../../components/article/Article';
import './service.css';

function Service  (){
  const history = useNavigate()
const formulaire3em = () => {
  history("./formulaire")
}

const formulaireterminal = () => {
history("./formulaire2")
}
return(
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Avantage title="Notre services" text="Le Club des Professeurs Expérimentés (CPE) est une organisation ou un service éducatif qui propose des cours de préparation à l'examen du BEPC (Brevet d'Études du Premier Cycle) et du Baccalauréat, principalement à Madagascar." />
    </div>
    {/* <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div> */}
    <div className="gpt3__whatgpt3-container">
      {/* <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" /> */}
      <div className="gpt3__blog-container_groupB">
        <Article texth="BEPC" date="" text="Fin du premier cycle de l'enseignement sécondaire." ecolageJour= "30 000" ecolagenuit="28 000" handleLoginClick={formulaire3em} />
        <Article texth="BACCALAUREAT" date="" text="Un passeport vers des opportunités futures passionnantes." ecolageJour= "33 000" ecolagenuit="30 000" handleLoginClick={formulaireterminal}/>
      </div>
    </div>
  </div>
)
  
}

export default Service;



