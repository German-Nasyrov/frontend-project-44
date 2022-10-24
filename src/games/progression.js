import getRandom from '../helper.js';
import runLoop from '../index.js';

const minNum = 0;
const maxNum = 100;
let array = [];
let rightAnswer = '';
const description = 'What number is missing in the progression?';

const getRandomIntInclusive = (minValue, maxValue) => {
  const min = Math.ceil(minValue);
  const max = Math.floor(maxValue);
  return Math.floor(Math.random() * (max - min)) + min;
};

const progression = () => {
  const randomNum = getRandom(minNum, maxNum);
  const elemCount = getRandomIntInclusive(4, 10);
  const randomStep = getRandomIntInclusive(1, 11);
  const chooseElem = getRandomIntInclusive(0, elemCount);
  for (let i = 0; i <= elemCount; i += 1) array.push(i * randomStep + randomNum);
  rightAnswer = String(array[chooseElem]);
  array[chooseElem] = '..';
  return array.join(' ');
};

const getCircle = () => {
  const question = progression();
  array = [];
  return [question, rightAnswer];
};

const calcNum = () => {
  runLoop(getCircle, description);
};

export default calcNum;
