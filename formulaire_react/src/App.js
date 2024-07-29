// Importation de la bibliothèque React
import React from 'react';
// Importation du composant SignupForm
import SignupForm from './components/SignupForm';
// Importation des styles
import styles from './App.module.css';
// Définition du composant principal App en tant que fonction fléchée
const App = () => {
  // Rendu du composant
  return (
    <div className={styles.background}>
      {/* Titre de la page */}
      <h1 className={styles.heading}>Formulaire d'inscription</h1>
      {/* Inclusion du composant SignupForm */}
      <SignupForm />
    </div>
  );
};

// Exportation du composant App pour qu'il puisse être utilisé ailleurs dans l'application
export default App;
