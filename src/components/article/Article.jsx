import React from 'react';
import './article.css';


const Article = ({ texth, ecolageJour, ecolagenuit, handleLoginClick, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-content-image">
      <h1>{texth}</h1>
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h3>{text}</h3>
        <hr></hr>
        <div style={{ display: 'flex', marginBottom: '0px', marginTop: '5px' }}>
          <h4>Session:</h4>
          <p style={{ marginLeft: '15px' }}>   2023 - 2024</p>
        </div>
        <hr />
        <div style={{ display: 'flex', marginBottom: '0px', marginTop: '5px' }}>
          <h4>Date Fin Inscription:</h4>
          <p style={{ marginLeft: '15px' }}>   04 Janvier 2024</p>
        </div>
        <hr />
        <div style={{ display: 'flex', marginBottom: '0px', marginTop: '5px' }}>
          <h4>Date de rentrée:</h4>
          <p style={{ marginLeft: '15px' }}>   06 Janvier 2024</p>
        </div>
        <hr />
        <div style={{ display: 'flex', marginBottom: '0px', marginTop: '5px' }}>
          <h4>Droit:</h4>
          <p style={{ marginLeft: '15px' }}>  20 000 <sup>Ar</sup></p>
        </div>
        <hr />
        <div style={{ display: 'flex', marginBottom: '0px', marginTop: '5px' }}>
          <h4>Ecolage: </h4>
          <p style={{ marginLeft: '15px' }}>  {ecolageJour} <sup>Ar</sup> <p1>(Cours du jour)</p1>    | {ecolagenuit} <sup>Ar</sup> <p1>(Cours du soir) </p1></p>
        </div>
        <br />
      </div>

      <button type="button" onClick={handleLoginClick}>Inscrire</button>
    </div>
  </div>
);

export default Article;
