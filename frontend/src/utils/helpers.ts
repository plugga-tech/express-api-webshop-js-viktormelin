export const internationlizeCurrency = (amount: number) => {
  return amount.toLocaleString('sv-SE', {
    style: 'currency',
    currency: 'SEK',
  });
};
