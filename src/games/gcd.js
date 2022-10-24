import getRandom from '../helper.js';
import runLoop from '../index.js';

const minNum = 0;
const maxNum = 100;
const description = 'Find the greatest common divisor of given numbers.';

const calcGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) return firstNumber;
  return calcGcd(secondNumber, firstNumber % secondNumber);
};

const getCircle = () => {
  const genFirstNum = getRandom(minNum, maxNum);
  const genSecondNum = getRandom(minNum, maxNum);
  const question = `${genFirstNum} ${genSecondNum}`;
  const output = String(calcGcd(genFirstNum, genSecondNum));
  return [question, output];
};

const gcd = () => {
  runLoop(getCircle, description);
};

export default gcd;
