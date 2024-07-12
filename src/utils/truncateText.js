
// hide end of string

const truncateText = (text) => {

  if (text.length <= 26) return text;
  return text.substring(0, 26 ) + '...';
};


export default truncateText;