export const constans = {
  numberTel: '718-669-1100',
  location: '94-38 59th Ave Elmhurst, NY, 11373',
};

export const removeDashInTelNumber = numbers => {
  // const nums= String(number);
  const dashOut = numbers.split('').filter(item => item !== '-');
  return dashOut.join('');
};
