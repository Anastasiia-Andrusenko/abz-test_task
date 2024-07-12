
// hide end of string

const truncateText = (text) => {
  if (text.length <= 35) return text;
  return text.substring(0, 35) + '...';
};


export default truncateText;