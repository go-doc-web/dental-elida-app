const formattedDate = rawDate => {
  const dateObject = new Date(rawDate);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(dateObject);
};

export default formattedDate;
