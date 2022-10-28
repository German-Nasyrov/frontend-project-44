import getRandomNum from '../helper.js';
import runLoop from '../index.js';

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

const getRound = () => {
  const genFirstNum = getRandomNum(0, 100);
  const genSecondNum = getRandomNum(0, 100);
  const char = chars[getRandomNum(0, chars.length - 1)];
  const question = `${genFirstNum} ${char} ${genSecondNum}`;
  const answer = String(calc(genFirstNum, genSecondNum, char));
  return [question, answer];
};

const playBrainCalc = () => {
  runLoop(getRound, description);
};

export default playBrainCalc;
