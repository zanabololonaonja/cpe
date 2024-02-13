import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthGuard from './AuthGuard';
import { Contact, Avantage, Service, Histoire, Accueil } from './containers';
import { Navbar, Login, Formulaire, Formulaire2, UserInterface, Renseignement, Historique } from './components';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // État de l'authentification

  // Fonction pour gérer la connexion de l'utilisateur
  const handleLogin = () => {
    // Ici, mettez votre logique d'authentification
    // Par exemple, une fois l'authentification réussie :
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
        <Routes>
          {/* ... Vos autres routes ... */}
          <Route path="*" element={<><Navbar /><Accueil /><Avantage /> < Histoire /><Service /> <Contact /></>} />
          <Route path="/" element={<><Navbar /><Accueil /><Avantage /> < Histoire /><Service /> <Contact /></>} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/formulaire2" element={<Formulaire2 />} />
          {/* Utilisation du composant de garde pour protéger les routes */}
          <Route
            path="/userInterface"
            element={
              <AuthGuard
                component={UserInterface}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/renseignement"
            element={
              <AuthGuard
                component={Renseignement}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/historique"
            element={
              <AuthGuard
                component={Historique}
                isAuthenticated={isAuthenticated}
              />
            }
          />

          {/* ... Autres routes ... */}

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
