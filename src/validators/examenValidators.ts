// src/validators/examenValidator.ts
export const validateExamen = (examen: {
  titre: string;
  date: string;
  type: string;
}) => {
  const errors: { [key: string]: string } = {};

  if (!examen.titre || examen.titre.trim().length < 2) {
    errors.titre = 'Le titre est obligatoire et doit contenir au moins 2 caractères.';
  }

  if (!examen.date) {
    errors.date = 'La date est obligatoire.';
  }

  if (!examen.type) {
    errors.type = 'Le type d\'examen est obligatoire.';
  }

  return errors;
};
