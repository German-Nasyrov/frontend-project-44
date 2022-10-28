import getRandomNum from '../helper.js';
import runLoop from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (number) => {
  if (number < 2) return false;
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) return false;
    divider += 1;
  }
  return true;
};

const getRound = () => {
  const genRandomNum = getRandomNum(0, 100);
  const answer = isPrimeNum(genRandomNum) ? 'yes' : 'no';
  const question = genRandomNum;
  return [question, answer];
};

const playBrainPrime = () => {
  runLoop(getRound, description);
};

export default playBrainPrime;
