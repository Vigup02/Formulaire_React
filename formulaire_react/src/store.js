// Importation de la fonction configureStore depuis @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
// Importation du reducer user depuis le fichier userSlice.js
import userReducer from './features/userSlice';

// Configuration du store Redux en utilisant configureStore
const store = configureStore({
  // Définition des reducers que notre store va utiliser
  reducer: {
    // Déclaration du reducer user sous la clé 'user'
    user: userReducer,
  },
});

// Exportation du store pour qu'il puisse être utilisé dans toute l'application
export default store;

