const transformString = (str) => {
 const length = str.length;
 let output = str;
 if (length % 15 === 0) {
  output = output.split('').filter(char => char !== " ").reverse().map(char => char.charCodeAt(0).join(' '));
 } else if (length % 3 === 0) {
  output = output.split('').filter(char => char !== " ").reverse().join('');
 } else if (length % 5 === 0) {
  output = output.split('').filter(char => char !== " ").map(char => char.charCodeAt(0)).join(' ');
 }
 console.log(output);
 return output;
};
module.exports = transformString;