import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
const LigneRecu = ({ paiements, CODEMOTIF, MONTANT, montantTotal }) => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'recu-data',
        onAfterPrint: () => alert('Impression réussie')
    });

    return (
        <>
            <div ref={componentRef}>
                <LigneRecu paiements={paiements} CODEMOTIF={CODEMOTIF} MONTANT={MONTANT} montantTotal={montantTotal} />
                <h1 className="text-center">COURS CPE Fianarantsoa</h1>
                <p className="text-center">Tél: 0349353203</p>
                <table className="tablerecu">
                    <thead className="tablerecu">
                        <tr>
                            <th>MOTIF</th>
                            <th>MONTANT</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    {/* Afficher les valeurs des propriétés ici */}
                    <tr>
                        <td>{CODEMOTIF}</td>
                        <td>{MONTANT}</td>
                        <td>{montantTotal}</td>
                    </tr>
                </table>
                <br /><br /><br />
                <p2 className="total">TOTAL:{montantTotal}</p2><br />
            </div>
            <button onClick={handlePrint}>Imprimer</button>
        </>
    );
};

export default LigneRecu;
