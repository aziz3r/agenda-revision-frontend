// src/utils/dateHelpers.ts
export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getDayName = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('fr-FR', { weekday: 'long' });
};
