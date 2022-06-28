const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compare = (right, student) => {
  if (right === student) {
    return 1;
  } if (student === 'N.A') {
    return 0;
  }
  return -0.5;
}

const count = (right, student, callback) => {
  let c = 0;
  for (let i = 0; i < right.length; i += 1) {
    const result = callback(right[i], student[i]);
    c += result;
  }
  return `Resultado final ${c} pontos`;
};

console.log(count(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));

