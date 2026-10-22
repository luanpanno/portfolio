// Career start: August 2020 (months are 0-based).
const CAREER_START = new Date(2020, 7, 1);

export const getYearsOfExperience = (now = new Date()) => {
  const years = now.getFullYear() - CAREER_START.getFullYear();
  const hasReachedAnniversary = now.getMonth() >= CAREER_START.getMonth();

  return hasReachedAnniversary ? years : years - 1;
};
