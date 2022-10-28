import getRandomNum from '../helper.js';
import runLoop from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) return true;
  return false;
};

const getRound = () => {
  const genNum = getRandomNum(0, 100);
  const question = genNum;
  const answer = isEven(genNum) ? 'yes' : 'no';
  return [question, answer];
};

const playBrainEven = () => {
  runLoop(getRound, description);
};

export default playBrainEven;
