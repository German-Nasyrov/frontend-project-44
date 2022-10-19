import readlineSync from 'readline-sync';
import sayHello, {
  trueValue,
  falseValue,
  getRandomValue,
  result,
  successCheck,
} from '../src/index.js';

let array = [];
let rightAnswer = '';
const explain = 'What number is missing in the progression?';

function getRandomIntInclusive(minNum, maxNum) {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min)) + min;
}

function progression() {
  const randomNum = getRandomValue();
  const elemCount = getRandomIntInclusive(4, 10);
  const randomStep = getRandomIntInclusive(1, 11);
  const chooseElem = getRandomIntInclusive(0, elemCount);
  for (let i = 0; i <= elemCount; i += 1) {
    array.push(i * randomStep + randomNum);
  }
  rightAnswer = String(array[chooseElem]);
  array[chooseElem] = '..';

  return array.join(' ');
}

export default function calcNum() {
  const userName = sayHello(explain);

  for (let i = 0; i < 3; i += 1) {
    let answer = '';
    const doProgression = progression();
    console.log(`Question: ${doProgression}`);
    answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      successCheck(trueValue, answer);
      array = [];
    } else {
      successCheck(falseValue, answer, rightAnswer);
      break;
    }
  }

  return result(userName);
}
