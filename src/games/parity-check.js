import getRandom from '../helper.js';
import runLoop from '../index.js';

const minNum = 0;
const maxNum = 100;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) return true;
  return false;
};

const getCircle = () => {
  const genNum = getRandom(minNum, maxNum);
  const question = genNum;
  const output = isEven(genNum) ? 'yes' : 'no';
  return [question, output];
};

const even = () => {
  runLoop(getCircle, description);
};

export default even;
