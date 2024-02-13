import React from 'react';
import Avantage from '../../components/avantage/Avantage';
import './avantage.css';

const featuresData = [
  {
    title: 'Accès gratuit aux livres pédagogiques',
    text: ' Les étudiants bénéficient de l\'avantage d\'obtenir gratuitement des ressources éducatives qui couvrent une variété de sujets. Ce partage de livres offre une richesse de contenus pour répondre à divers besoins d\'apprentissage.',
  },
  {
    title: 'Encadrement par des enseignants expérimentés',
    text: ' Les élèves bénéficient de l\'expertise d\'enseignants chevronnés, apportant ainsi une qualité d\'enseignement élevée et une guidance professionnelle. L\'expérience pédagogique des enseignants peut grandement influencer la compréhension et la réussite des élèves.',
  },
  {
    title: 'Possibilité de participer à des examens blancs',
    text: ' Les examens blancs offrent une opportunité précieuse de s\'entraîner dans des conditions similaires à celles d\'un examen réel. Cela permet aux étudiants de s\'habituer au format des examens, d\'identifier leurs points forts et faibles, et de mieux se préparer pour les évaluations officielles.',
  },
  {
    title: 'Liberté de choisir les horaires d\'apprentissage',
    text: 'Les élèves ont la flexibilité de définir leurs propres horaires d\'étude, ce qui favorise un environnement d\'apprentissage personnalisé. Cette liberté permet aux étudiants de mieux concilier leurs études avec d\'autres engagements personnels, favorisant ainsi un équilibre entre la vie académique et la vie quotidienne.',
  },
];

const Avantag = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text"> Les avantages de l’enseignement au cours CPE</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Avantage title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Avantag;
