// AuthGuard.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ component: Component, isAuthenticated, ...rest }) => {
  if (!isAuthenticated) {
    // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
    return <Navigate to="/login" />;
  }

  // Si l'utilisateur est authentifié, rend le composant demandé
  return <Component {...rest} />;
};

export default AuthGuard;
