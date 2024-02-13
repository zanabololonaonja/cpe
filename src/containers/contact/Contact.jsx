import React from 'react';
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiFacebookLine } from 'react-icons/ri';
// import gpt3Logo from '../../logo.svg';
import './contact.css';
import trano from './trano.png'

const Contact = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">" Mettez votre confiance dans notre expérience "</h1>
    </div>



    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo" >
        <img src={trano} alt="Description de l'image" style={{ width: '150px', height: '170px' }} />
      </div>
      <div className="gpt3__footer-links_logo">
        <a href='https://www.google.com/maps/place/Cpe/@-21.4489147,47.0857635,21z/data=!4m6!3m5!1s0x21e7bf19c0ff1489:0x557b826821d150e9!8m2!3d-21.448832!4d47.0857316!16s%2Fg%2F11sv8hm5xr?entry=ttu'>
          <div className="akaiky">
            <RiMapPinLine size={25}  color='black' className="elanelana" />
            <p>Lot D89/3601  Ambatomena <br /> Fianarantsoa 301 <br /> Madagasikara</p>
          </div>
        </a>
      </div>
      <div className="gpt3__footer-links_logo" >
        <div className="akaiky">
          <RiPhoneLine size={22} color='black' className="elanelana" />
          <p>034 93 352 03</p>
        </div>
        <a href="https://www.facebook.com/watch/courscpefianar/" style={{marginTop: '-15px'}}>
          <div className="akaiky">
            <RiFacebookLine size={22}  color='black' className="elanelana" />
            <p>Cours CPE Fianarantsoa</p>
          </div>
        </a>
        <div className="akaiky" style={{marginTop: '-5px'}}>
          <RiMailLine size={22} className="elanelana" />
          <p>cpefianar@gmail.com</p>
        </div>
      </div>
    
    </div>

    <div className="gpt3__footer-copyright">
      <p>Cours CPE - Copyright 2023</p>
    </div>
  </div>
);

export default Contact;
