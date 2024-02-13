import React, { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import Navbar3 from '../navbar/Navbar3';

import Axios from 'axios';
import Swal from 'sweetalert2';
// import { toast } from 'react-toastify';
import './Historique.css';

import { useNavigate } from 'react-router-dom'


function App() {
  const NUMMATRICULE = localStorage.getItem('nummatricule');
  useEffect(() => {
    historique()

  }, [])
  const [receipts, setReceipts] = useState([]);
  
  const formatDateTime = (dateTimeString) => {
    const options = { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateTimeString).toLocaleString('fr-FR', options);
  };

  const getYearFromDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.getFullYear();
  };


  const historique = async () => {
    await Axios.get(`http://localhost:5000/historique/${NUMMATRICULE}`).then((response) => {
      setReceipts(response.data.resp);
    });
  }

  return (
    <div>
      <Navbar3 />
      <div className='page'>
        <div className="formulaire">
          <h2 className='lohany' style={{ textAlign: 'center', color: '#205375' }}>Historique d'activité</h2>
          <hr style={{ color: ' #9b9b9b' }}></hr>
          <div className='vatany'>

            {/* hafa */}

            <div className="ag-courses">
              {receipts.map((receipt) => (
                <div className="ag-courses_item" key={receipt.NUMRECU}>
                  <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>
                    <div className="ag-courses-item_title">
                      <p>N°: {receipt.NUMRECU}/{getYearFromDate(receipt.DATERECU)}</p>
                      <p>{formatDateTime(receipt.DATERECU)}</p>
                    </div>
                    <table className='tableaffichevoloany'>
                      <thead>
                        <tr className="ag-courses-item_date-box">
                          <th>MOTIF</th>
                          <th>MONTANT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {receipt.CODEMOTIFS.split(',').map((codeMotif, index) => (
                          <tr className="ag-courses-item_date-box" key={index}>
                            <td>{codeMotif}</td>
                            <td>{receipt.MONTANTS.split(',')[index]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table><br />
                    <div className="ag-courses-item_date-box">
                      Total:
                      <span className="ag-courses-item_date">
                        {[receipt.TOTAL].toLocaleString()} <sup>Ar</sup>
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>




            {/* tapitra */}


          </div>

        </div>
      </div>
    </div>

  );
}

export default App;
