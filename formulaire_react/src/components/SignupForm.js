// Composant du formulaire d'inscription
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../features/userSlice';
import styles from './style.module.css'; // Import des styles CSS modules

const SignupForm = () => {
  // Initialisation de react-hook-form
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch = useDispatch();  // Initialisation du hook useDispatch pour envoyer des actions au store Redux

  // État pour gérer le message de confirmation
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit = data => {
    console.log(data);  // Affiche les données du formulaire dans la console pour le débogage

    // Contrôle de l'âge de l'utilisateur
    if (data.age < 18) {
      alert('Vous devez avoir au moins 18 ans pour vous inscrire.');  // Affiche un message d'alerte si l'âge est inférieur à 18 ans
    } else {
      // Enregistrement des données utilisateur dans le store Redux
      dispatch(saveUserData(data));
       // Mise à jour de l'état pour afficher le message de confirmation
       setConfirmationMessage('Inscription réussie !');
      
      // Réinitialiser les champs du formulaire
      reset();

       // Optionnel : Réinitialiser le message après 5 secondes
       setTimeout(() => {
         setConfirmationMessage('');
       }, 5000);
    }
  };

  // Fonction de validation personnalisée pour le mot de passe
  const validatePassword = (value) => {
    if (!value) return 'Un mot de passe est requis';
    
    // Vérifier la longueur minimale
    const minLengthValid = value.length >= 8;

    // Vérifier la conformité avec le format requis
    const patternValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);

    // Retourner un message d'erreur unique pour la non-conformité
    if (!minLengthValid || !patternValid) {
      return 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial';
    }

    // Si tout est valide
    return true;
  };

  return (
  <div>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <div className={styles.formGroup}>
        {/* Champ de saisie pour le nom */}
        <input
          {...register('lastName', { required: 'Un nom est requis' })}
          className={styles.inputField}
          placeholder="Nom"  // Placeholder affiché dans le champ
        />
        {/* Affichage des messages d'erreur si la validation échoue */}
        {errors.lastName && <span className={styles.errorMessage}>{errors.lastName.message}</span>}
      </div>
      <div className={styles.formGroup}>
        {/* Champ de saisie pour le prénom */}
        <input
          {...register('firstName', { required: 'Un prénom est requis' })}
          placeholder="Prénom"  // Placeholder affiché dans le champ
          className={styles.inputField}
        />
        {/* Affichage des messages d'erreur si la validation échoue */}
        {errors.firstName && <span className={styles.errorMessage}>{errors.firstName.message}</span>}
      </div>
      <div className={styles.formGroup}>
        {/* Champ de saisie pour l'âge */}
        <input
          type="number"  // Type de champ numérique
          {...register('age', { required: 'Un âge est requis' })}
          placeholder="Âge"  // Placeholder affiché dans le champ
          className={styles.inputField}
        />
        {/* Affichage des messages d'erreur si la validation échoue */}
        {errors.age && <span className={styles.errorMessage}>{errors.age.message}</span>}
      </div>
      <div className={styles.formGroup}>
        {/* Champ de saisie pour l'email */}
        <input
          type="email"  // Type de champ email pour validation automatique du format
          {...register('email', { required: 'Un email est requis' })}
          placeholder="Email"  // Placeholder affiché dans le champ
          className={styles.inputField}
        />
        {/* Affichage des messages d'erreur si la validation échoue */}
        {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
      </div>
      <div className={styles.formGroup}>        
        {/* Champ de saisie pour le mot de passe */}
        <input
          type="password"  // Type de champ mot de passe pour masquer les caractères
          {...register('password', { validate: validatePassword })}
          placeholder="Mot de passe"  // Placeholder affiché dans le champ
          className={styles.inputField}
        />
        {/* Affichage des messages d'erreur si la validation échoue */}
        {errors.password && <span className={styles.errorMessage}>{errors.password.message}</span>}
      </div>
      {/* Bouton de soumission du formulaire */}
      <button type="submit" className={styles.submitButton}>S'inscrire</button>
    </form>

    {/* Affichage du message de confirmation */}
    {confirmationMessage && (
      <div className={styles.confirmationMessage}>
        {confirmationMessage}
      </div>
    )}
  </div>
  );
};

export default SignupForm;
