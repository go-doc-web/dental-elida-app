const removeDashInTelNumber = numbers => {
  // const nums= String(number);
  const dashOut = numbers.split('').filter(item => item !== '-');
  return dashOut.join('');
};
export default removeDashInTelNumber;
