import getRandom from '../helper.js';
import runLoop from '../index.js';

const minNum = 0;
const maxNum = 100;
const chars = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const calc = (firstNumber, secondNumber, char) => {
  switch (char) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return `Unknown ${char}`;
  }
};

const getCircle = () => {
  const genFirstNum = getRandom(minNum, maxNum);
  const genSecondNum = getRandom(minNum, maxNum);
  const char = chars[getRandom(0, chars.length - 1)];
  const question = `${genFirstNum} ${char} ${genSecondNum}`;
  const output = String(calc(genFirstNum, genSecondNum, char));
  return [question, output];
};

const isResultEquals = () => {
  runLoop(getCircle, description);
};

export default isResultEquals;
