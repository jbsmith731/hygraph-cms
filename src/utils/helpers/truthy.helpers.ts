export const hasAllTruthyValues = <TArrItem>(arr: TArrItem[]) => {
  return arr.every((value) => Boolean(value));
};

export const hasSomeTruthyValue = <TArrItem>(arr: TArrItem[]) => {
  return arr.some((value) => Boolean(value));
};
