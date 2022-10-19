import readlineSync from 'readline-sync';
import sayHello, {
  firstRound,
  thirdRound,
  trueValue,
  falseValue,
  getRandomValue,
  result,
  successCheck,
} from '../src/index.js';

let array = [];
let rightAnswer = '';
const explain = 'What number is missing in the progression?';
const userName = sayHello(explain);

const getRandomIntInclusive = (minNum, maxNum) => {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min)) + min;
};

const progression = () => {
  const randomNum = getRandomValue();
  const elemCount = getRandomIntInclusive(4, 10);
  const randomStep = getRandomIntInclusive(1, 11);
  const chooseElem = getRandomIntInclusive(0, elemCount);
  for (let i = 0; i <= elemCount; i += 1) array.push(i * randomStep + randomNum);
  rightAnswer = String(array[chooseElem]);
  array[chooseElem] = '..';
  return array.join(' ');
};

const calcNum = () => {
  for (let i = firstRound; i <= thirdRound; i += 1) {
    const doProgression = progression();
    console.log(`Question: ${doProgression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      successCheck(trueValue, answer);
      array = [];
    } else {
      successCheck(falseValue, answer, rightAnswer);
      break;
    }
  }
  return result(userName);
};

export default calcNum;
