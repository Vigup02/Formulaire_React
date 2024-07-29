// Importation de la fonction createSlice depuis @reduxjs/toolkit
import { createSlice } from '@reduxjs/toolkit';

// Création de la slice user avec createSlice
export const userSlice = createSlice({
  // Nom de la slice
  name: 'user',
  // État initial de la slice
  initialState: {
    userInfo: {},
  },
  // Définition des reducers qui gèrent les actions et mettent à jour l'état
  reducers: {
    // Reducer pour sauvegarder les données utilisateur
    saveUserData: (state, action) => {
      // Mise à jour de l'état userInfo avec les données de l'action
      state.userInfo = action.payload;
    },
  },
});

// Exportation de l'action saveUserData générée par createSlice
export const { saveUserData } = userSlice.actions;

// Exportation du reducer généré par createSlice
export default userSlice.reducer;
