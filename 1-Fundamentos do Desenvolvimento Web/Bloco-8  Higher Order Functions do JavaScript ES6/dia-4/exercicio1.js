const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];


const flatten = () => arrays.reduce((allArray, array) => allArray.concat(array));
 
console.log(flatten(arrays))

