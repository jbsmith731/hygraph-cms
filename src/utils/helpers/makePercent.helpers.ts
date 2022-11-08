/**
 * Creates a percentage from 2 numbers
 */
export const makePercent = (part: number, whole: number, round = false) => {
  const percent = (part / whole) * 100;

  return round ? `${Math.round((percent * 10) / 10)}%` : `${percent}%`;
};
