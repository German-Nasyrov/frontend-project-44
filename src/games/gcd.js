import getRandomNum from '../helper.js';
import runLoop from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const calcGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) return firstNumber;
  return calcGcd(secondNumber, firstNumber % secondNumber);
};

const getRound = () => {
  const genFirstNum = getRandomNum(0, 100);
  const genSecondNum = getRandomNum(0, 100);
  const question = `${genFirstNum} ${genSecondNum}`;
  const answer = String(calcGcd(genFirstNum, genSecondNum));
  return [question, answer];
};

const playBrainGcd = () => {
  runLoop(getRound, description);
};

export default playBrainGcd;
