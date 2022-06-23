const numberChecker = (myNumber, number) => myNumber === number;
const lotteryResult = (myNumber, callBack) => {
  const numberOne = Math.floor((Math.random() * 5) + 1);
  return callBack(myNumber, numberOne) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(4, numberChecker));